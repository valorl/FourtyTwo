using FourtyTwo.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FourtyTwo.Models
{
    public class Question
    {
        public List<int> Numbers { get; set; }
        public Operation Operation { get; set; }
        public int Answer { get; set; }

        public Question()
        {
            Numbers = new List<int>();
        }
    }
}
