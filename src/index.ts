import express from "express";
import HelloWorld from "./HelloWorld";

const app = express();
const port = 3000;

app.get("/", (_, res: express.Response) => {
  const hello = new HelloWorld("test", "test");
  res.json({
    status: 200,
    response: hello.getName()
  });
});

app.listen(port, () => console.log(`Example app listening port ${port}`));
