using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FourtyTwo.API.Models;

namespace FourtyTwo.API.Repositories
{
    public interface IExerciseRepository
    {
        Task<Exercise> FindOneAsync(string _id);
        Task<IEnumerable<Exercise>> FindManyAsync(string user_id);
        Task<Exercise> InsertOneAsync(Exercise model);

    }
}
