using MongoDB.Driver;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace FourtyTwo.API.Repositories
{
    public class MongoDatabaseProvider : IMongoDatabaseProvider
    {
        public IMongoDatabase Database { get; }

        public MongoDatabaseProvider(string connectionString, string databaseName)
        {
            Database = new MongoClient(connectionString).GetDatabase(databaseName);
        }
    }
}
