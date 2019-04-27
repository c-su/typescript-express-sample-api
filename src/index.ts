import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import { createConnection } from "typeorm";
import { User } from "./entities/user";

const app = express();
const port = 3000;

app.get("/", async (_, res: Response, next: NextFunction) => {
  try {
    const connection = await createConnection();
    const userRepository = connection.getRepository(User);

    const user = new User("a", "a", "a", 3.0);
    await userRepository.save(user);

    res.json({
      status: 200,
      response: "ok"
    });
  } catch (err) {
    next(err);
  }
});

app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  console.log("err handler");
  console.log(err);
});

app.listen(port, () => console.log(`Example app listening port ${port}`));
