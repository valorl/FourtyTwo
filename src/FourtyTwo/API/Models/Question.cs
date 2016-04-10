using FourtyTwo.API.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FourtyTwo.API.Models
{
    public class Question
    {
        public List<int> Numbers { get; set; }
        public Operation Operation { get; set; }

        public Question()
        {

        }
    }
}
