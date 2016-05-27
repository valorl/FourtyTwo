using MongoDB.Driver;
using MongoDB.Bson;

namespace FourtyTwo.Repositories
{
    public class MongoDatabaseProvider : IMongoDatabaseProvider
    {
        public IMongoDatabase Database { get; }

        public MongoDatabaseProvider(string connectionString, string databaseName)
        {
            Database = new MongoClient(connectionString).GetDatabase(databaseName);
            SetIndex();
        }

        private void SetIndex()
        {
            var exCollection = Database.GetCollection<BsonDocument>("Exercises");
            var keys = Builders<BsonDocument>.IndexKeys.Ascending("UserId");
            exCollection.Indexes.CreateOne(keys);
        }
    }
}
