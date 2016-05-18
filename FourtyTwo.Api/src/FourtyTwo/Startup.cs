using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using FourtyTwo.Repositories;
using Microsoft.Extensions.OptionsModel;
using FourtyTwo.Properties;
using Microsoft.AspNet.Authentication.JwtBearer;
using System.Security.Claims;

namespace FourtyTwo
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            // Set up configuration sources.
            var builder = new ConfigurationBuilder()
                .AddJsonFile("apiconfig.json")
                .AddUserSecrets()
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddSingleton<IMongoDatabaseProvider>(provider =>
                new MongoDatabaseProvider(Configuration["MongoDB:ConnectionString"],Configuration["MongoDB:Database"]));
            services.AddScoped<IExerciseRepository, ExerciseRepository>();
            services.Configure<Auth0Settings>(Configuration.GetSection("Auth0"));
            services.AddCors();
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            // Auth 0 configuration
            var auth0logger = loggerFactory.CreateLogger("Auth0");
            var auth0settings = app.ApplicationServices.GetService<IOptions<Auth0Settings>>();

            app.UseCors(builder => {
                //builder.WithOrigins("http://localhost:8080")
                //       .WithMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                //       .AllowAnyHeader();
                builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
            });

            app.UseJwtBearerAuthentication(options => 
            {
                options.Audience = auth0settings.Value.ClientId;
                options.Authority = $"https://{auth0settings.Value.Domain}";
                options.Events = new JwtBearerEvents
                {
                    OnAuthenticationFailed = context =>
                    {
                        auth0logger.LogError("Auth0 failed to authenticate.", context.Exception);
                        return Task.FromResult(0);
                    },
                    OnValidatedToken = context =>
                    {
                        var claimsIdentity = context.AuthenticationTicket.Principal.Identity as ClaimsIdentity;

                        // Add id_token from Authorization header (Bearer <id_token>)
                        claimsIdentity.AddClaim(new Claim("id_token",
                            context.Request.Headers["Authorization"][0].Substring(context.AuthenticationTicket.AuthenticationScheme.Length +1)));
                        claimsIdentity.AddClaim(new Claim(ClaimTypes.Name, claimsIdentity.FindFirst(c => c.Type == ClaimTypes.NameIdentifier).Value.Split('|')[1]));

                        return Task.FromResult(0);
                    }
                };

            });






            app.UseIISPlatformHandler();

            app.UseStaticFiles();

            app.UseMvc();
        }

        // Entry point for the application.
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
