using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FourtyTwo.Models
{
    public class Exercise
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string _id { get; set; }
        [Required]
        public DateTime TimeStamp { get; set; }
        [Required]
        public int Score { get; set; }
        [Required]
        public List<Question> Questions { get; set; }
        [Required]
        public string UserId { get; set; }

        [BsonIgnore]
        public int Accuracy { get; set; }

        public Exercise()
        {
            Questions = new List<Question>();
        }
    }
}
