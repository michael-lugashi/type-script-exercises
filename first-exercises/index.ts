import express from 'express';
import calculateBmi from './bmiCalc';
import calculator from './calculator';
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
 } catch (error) {
  res.status(400).json({ error: error.message });
 }
});

app.post('/calculate', (req, res) => {
 const { value1, value2, op } = req.body;
 const result = calculator(value1, value2, op);
 res.send(result);
});

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});
