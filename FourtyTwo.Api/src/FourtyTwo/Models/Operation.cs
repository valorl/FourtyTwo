using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace FourtyTwo.Models
{
    [DataContract]
    public class Operation
    {
        [DataMember(Name = "sign")]
        public string Sign { get; set; }
        [DataMember(Name = "type")]
        public string Type { get; set; }
    }
}
