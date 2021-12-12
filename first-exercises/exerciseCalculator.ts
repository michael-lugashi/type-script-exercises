interface exerciseSummery {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: 1 | 2 | 3;
  ratingDescription: string;
  target: number;
  average: number;
}

function calculateExercises(days: number[], target: number): exerciseSummery {
  const average = days.reduce((pv, cv) => pv + cv) / days.length;
  const success = average >= target;
  const rating = success ? 3 : target - average < 1 ? 2 : 1;
  return {
    periodLength: days.length,
    trainingDays: days.filter((x) => x).length,
    success,
    average,
    rating,
    ratingDescription: success
      ? 'Great job'
      : rating === 2
      ? 'not too bad but could be better'
      : 'You suck',
    target,
  };
}
console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
