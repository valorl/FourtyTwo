using FourtyTwo.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace FourtyTwo.Models
{
    [DataContract]
    public class Question
    {
        [DataMember(Name = "numbers")]
        public List<int> Numbers { get; set; }
        [DataMember(Name = "operation")]
        public Operation Operation { get; set; }
        [DataMember(Name = "answer")]
        public int Answer { get; set; }

        public Question()
        {
            Numbers = new List<int>();
        }
    }
}
