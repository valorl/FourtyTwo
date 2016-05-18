using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using FourtyTwo.Models;
using Microsoft.AspNet.Authorization;
using FourtyTwo.Repositories;
using System.Security.Claims;
using FourtyTwo.Models.Enums;

namespace FourtyTwo.Controllers
{
    [Route("v1/api/exercises/")]
    [Authorize(ActiveAuthenticationSchemes = "Bearer")]
    public class ExerciseController : Controller
    {
        private IExerciseRepository _repository;

        public ExerciseController(IExerciseRepository repository)
        {
            _repository = repository;
        }
        
        // GET: v1/api/exercises
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var userId = User.Identity.Name;
            if (userId == null) return HttpUnauthorized();

            var userExercises = await _repository.FindManyAsync(userId);
            if (userExercises == null || userExercises.ToList().Count < 1) return HttpNotFound();

            return Ok(userExercises);
        }

        // GET v1/api/exercises/5
        [HttpGet("{id}", Name = "GetByExerciseId")]
        public async Task<IActionResult> Get(string id)
        {
            var userId = User.Identity.Name;
            if (userId == null) return HttpUnauthorized();

            var userExercise = await _repository.FindOneAsync(id);
            if (userExercise == null) return HttpNotFound();

            return Ok(userExercise);
        }

        // POST api/exercises
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Exercise exercise)
        {
            //var exercise = new Exercise
            //{
            //    TimeStamp = DateTime.Now,
            //    Score = 15,
            //    Accuracy = 5,
            //    UserId = "570a4a123f062e8f16a7566f",
            //    Questions = new List<Question>()
            //    {
            //        new Question()
            //        {
            //            Numbers = { 21, 21 },
            //            Operation = Operation.Addition
            //        }
            //    },
            //};

            var userId = User.Identity.Name;
            if (userId == null) return HttpUnauthorized();
            var user = User;

            exercise.UserId = userId;

            await _repository.InsertOneAsync(exercise);
            return CreatedAtRoute("GetByExerciseId", new { id = exercise._id }, exercise);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

    }
}
