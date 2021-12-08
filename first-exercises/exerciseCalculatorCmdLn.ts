interface exerciseSummery {
 periodLength: number;
 trainingDays: number;
 success: boolean;
 rating: 1 | 2 | 3;
 ratingDescription: string;
 target: number;
 average: number;
}

interface MyValues {
 value1: number;
 value2: number[];
}
const parseArgs = (args: Array<string>): MyValues => {
 if (args.length < 5) throw new Error('Not enough arguments');
 console.log(args);
 const nums = [];
 if (isNaN(Number(args[2]))) {
  throw new Error('This arguement needs to be a number');
 }
 for (let i = 3; i < args.length; i++) {
  if (!isNaN(Number(args[i]))) {
   nums.push(Number(args[i]));
   continue;
  }
  throw new Error('This arguement needs to be a number');
 }

 return {
  value1: Number(args[2]),
  value2: nums,
 };
};
try {
 const { value1, value2 } = parseArgs(process.argv);
 console.log(calculateExercisesCmdLn(value1, value2));
} catch (error: unknown) {
 let errorMessage = 'Something bad happened.';
 if (error instanceof Error) {
  errorMessage += ' Error: ' + error.message;
 }
 console.log(errorMessage);
}
function calculateExercisesCmdLn(
 target: number,
 days: number[]
): exerciseSummery {
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
