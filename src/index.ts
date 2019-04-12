import * as express from 'express';

const app = express();
const port = 3000;

app.get('/', (req: express.Request, res: express.Response) => res.json({
  status: 200,
  response: 'Hello World'
}));

app.listen(port, () => console.log(`Example app listening port ${port}`));