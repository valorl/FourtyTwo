using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace FourtyTwo.Models
{
    [DataContract]
    public class Exercise
    {
        [DataMember(Name = "id")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string _id { get; set; }
        [DataMember(Name = "timeStamp")]
        public DateTime TimeStamp { get; set; }
        [DataMember(Name = "score")]
        [Required]
        public int Score { get; set; }
        [DataMember(Name = "questions")]
        [Required]
        public List<Question> Questions { get; set; }
        [DataMember(Name = "userId")]
        [Required]
        public string UserId { get; set; }
        [DataMember(Name = "accuracy")]
        [Required]
        public int Accuracy { get; set; }

        public Exercise()
        {
            Questions = new List<Question>();
            TimeStamp = DateTime.Now;
        }
    }
}
