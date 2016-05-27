using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using FourtyTwo.Models;
using Microsoft.AspNet.Authorization;
using FourtyTwo.Repositories;
using System.Security.Claims;

namespace FourtyTwo.Controllers
{
    [Route("v1/api/auth/")]
    [Authorize(ActiveAuthenticationSchemes = "Bearer")]
    public class AuthController : Controller
    {
        // Lite endpoint for checking that JWT has not expired 
        [Route("tokencheck"), HttpGet]
        public IActionResult CheckToken()
        {
            return Ok();
        }
    }
}
