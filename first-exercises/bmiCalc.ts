export default function calculateBmi(height: number, weight: number): string {
  const bmi: number = weight / (height / 100) ** 2;
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
