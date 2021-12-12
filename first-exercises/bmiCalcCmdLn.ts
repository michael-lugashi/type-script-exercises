function calculateBmiCmdLn(height: number, weight: number): string {
  const bmi: number = weight / (height / 100) ** 2;
  console.log(bmi);
  if (bmi < 16) {
    return 'Underweight (Severe thinness)';
  }
  if (bmi < 17) {
    return 'Underweight (Moderate thinness)';
  }
  if (bmi < 18.5) {
    return 'Underweight (Mild Thinness)';
  }
  if (bmi < 25) {
    return 'Normal Range (Healthy Weight)';
  }
  if (bmi < 30) {
    return 'Overweight (Pre-obese)';
  }
  if (bmi < 35) {
    return 'Obese (Class I)';
  }
  if (bmi < 40) {
    return 'Obese (Class II)';
  }
  return 'Obese (Class III)';
}
interface MultiplyValues {
  value1: number;
  value2: number;
}
const parseArguments = (args: Array<string>): MultiplyValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');
  console.log(args);
  if (!Number.isNaN(Number(args[2])) && !Number.isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3]),
    };
  }
  throw new Error('Provided values were not numbers!');
};
try {
  const { value1, value2 } = parseArguments(process.argv);
  console.log(calculateBmiCmdLn(value1, value2));
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ` Error: ${error.message}`;
  }
  console.log(errorMessage);
}
