import "reflect-metadata";
import express from "express";
import { ConnectionOptions, createConnection } from "typeorm";
import { User } from "./entities/user";

const options: ConnectionOptions = {
  type: "sqlite",
  database: "../test.sqlite",
  entities: [User],
  logging: true
};

const app = express();
const port = 3000;

app.get("/", async (_, res: express.Response) => {
  const connection = await createConnection(options);
  const userRepository = connection.getRepository(User);

  const user = new User("a", "a", "a", 3.0);
  await userRepository.save(user);

  res.json({
    status: 200,
    response: "ok"
  });
});

app.listen(port, () => console.log(`Example app listening port ${port}`));
