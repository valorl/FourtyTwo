using MongoDB.Driver;

namespace FourtyTwo.Repositories
{
    public interface IMongoDatabaseProvider
    {
        IMongoDatabase Database { get; }
    }
}
