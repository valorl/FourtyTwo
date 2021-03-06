﻿using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using FourtyTwo.Models;

namespace FourtyTwo.Repositories
{
    public class ExerciseRepository : IExerciseRepository
    {
        private IMongoCollection<Exercise> _collection;
        private const string EXERCISE_COLLECTION_NAME = "Exercises";
        public ExerciseRepository(IMongoDatabaseProvider _dbProvider)
        {
            _collection = _dbProvider.Database.GetCollection<Exercise>(EXERCISE_COLLECTION_NAME);
        }
        public async Task<IEnumerable<Exercise>> FindManyAsync(string user_id)
        {
            var exercises = await _collection.Find(ex => ex.UserId == user_id).ToListAsync();
            return exercises;
        }
        public async Task<Exercise> InsertOneAsync(Exercise model)
        {
            await _collection.InsertOneAsync(model);
            return model;
        }
        public async Task<Exercise> FindOneAsync(string _id)
        {
            var exercise = await _collection.Find(ex => ex._id == _id).FirstOrDefaultAsync();
            return exercise;
        }
    }
}
