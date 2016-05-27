using System.Collections.Generic;
using System.Threading.Tasks;
using FourtyTwo.Models;

namespace FourtyTwo.Repositories
{
    public interface IExerciseRepository
    {
        Task<Exercise> FindOneAsync(string _id);
        Task<IEnumerable<Exercise>> FindManyAsync(string user_id);
        Task<Exercise> InsertOneAsync(Exercise model);

    }
}
