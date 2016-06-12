using FourtyTwo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FourtyTwo.Utils
{
    public static class ExerciseUpDownSetter
    {
        public static IEnumerable<Exercise> Set(IEnumerable<Exercise> exercises)
       {
            var list = exercises.OrderBy(ex => ex.TimeStamp).ToList();
            for(int i=0; i < exercises.Count(); i++)
            {
                if(i == 0)
                {
                    list[i].AccuracyArrow = 0;
                    list[i].ScoreArrow = 0;
                }
                if(i > 0)
                {
                    if (list[i].Accuracy > list[i - 1].Accuracy) list[i].AccuracyArrow = 1;
                    if (list[i].Accuracy == list[i - 1].Accuracy) list[i].AccuracyArrow = 0;
                    if (list[i].Accuracy < list[i - 1].Accuracy) list[i].AccuracyArrow = 2;

                    if (list[i].Score > list[i - 1].Score) list[i].ScoreArrow = 1;
                    if (list[i].Score == list[i - 1].Score) list[i].ScoreArrow = 0;
                    if (list[i].Score < list[i - 1].Score) list[i].ScoreArrow = 2;
                }

            }
            return list.OrderByDescending(ex => ex.TimeStamp);
        }
    }
}
