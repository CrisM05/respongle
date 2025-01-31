import express,{ Request, Response } from 'express';

const app = express();
const port = process.env.port || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Typescript, please work');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});