import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());

const PORT = 8080;
const options: cors.CorsOptions = {
  origin: '*'
};

app.use(cors(options));

app.get('/api/ping', (_req, res) => {
 console.log('someone pinged here');
 res.send('pong');
});

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});
