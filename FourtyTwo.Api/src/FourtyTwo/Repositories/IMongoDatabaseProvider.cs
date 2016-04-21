using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FourtyTwo.Repositories
{
    public interface IMongoDatabaseProvider
    {
        IMongoDatabase Database { get; }
    }
}
