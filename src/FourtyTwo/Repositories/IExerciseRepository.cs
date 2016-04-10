using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FourtyTwo.Models;

namespace FourtyTwo.Repositories
{
    interface IExerciseRepository
    {
        Task<Exercise> FindOneAsync(string _id);
        Task<IEnumerable<Exercise>> FindManyAsync(string user_id);
        Task InsertOneAsync(Exercise model);

    }
}
