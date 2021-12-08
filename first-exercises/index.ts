import express from 'express';
import calculateBmi from './bmiCalc';
const app = express();
const PORT = 3003;

app.get('/ping', (_req, res) => {
 res.send('pong');
});
app.get('/hello', (_req, res) => {
 res.send('Hello Full Stack!');
});
app.get('/bmi', (req, res) => {
 try {
  interface response {
   weight: number;
   height: number;
   bmi: string;
  }
  const response: response = {
   weight: Number(req.query.weight),
   height: Number(req.query.height),
   bmi: calculateBmi(Number(req.query.height), Number(req.query.weight)),
  };
  res.json(response);
 } catch (error) {
  res.status(400).json({ error: 'malformatted parameters' });
 }
});

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});
