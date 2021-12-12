import express = require('express');
import calculateBmi from './bmiCalc';
import calculator, { Operation } from './calculator';
import calculateExercises from './exerciseCalculator';
// import calculateExercisesCmdLn from './exerciseCalculatorCmdLn';
const app = express();
const PORT = 3003;

app.get('/ping', (_req, res) => {
  res.send('pong');
});
app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});
app.get('/bmi', (req, res) => {
  const { height, weight } = req.query;
  try {
    if (isNaN(Number(height) + Number(weight))) {
      throw new Error('malformatted parameters');
    }
    interface response {
      weight: number;
      height: number;
      bmi: string;
    }
    const response: response = {
      weight: Number(height),
      height: Number(weight),
      bmi: calculateBmi(Number(height), Number(weight)),
    };
    res.json(response);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Something bad happened!' });
    }
  }
});
app.post('/calculate', (req, res) => {
  interface body {
    value1: number;
    value2: number;
    op: Operation;
  }

  const { value1, value2, op }: body = req.body as body;
  const result = calculator(value1, value2, op);
  res.send(result);
});

app.post('/exercise', (req, res) => {
  console.log('new');
  console.log(req.body);
  interface body {
    days: number[];
    target: number;
  }
  const { days, target }: body = req.body as body;
  console.log(days);
  console.log(target);
  const result = calculateExercises(days, target);
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
