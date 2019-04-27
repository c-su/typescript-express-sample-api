import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import { createConnection } from "typeorm";
import { User } from "./entities/user";

const app = express();
const port = 3000;

app.get("/insert", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const connection = await createConnection();
    const userRepository = connection.getRepository(User);
    const response = {
      status: 200,
      response: "ok"
    };
    const name = req.query.name || "";
    const desc = req.query.desc || "";
    const file = req.query.file || "";

    const user = new User(name, desc, file, 3.0);
    await userRepository.save(user);

    connection.close();
    res.json(response);
  } catch (err) {
    next(err);
  }
});

app.get("/update", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const connection = await createConnection();
    const userRepository = connection.getRepository(User);
    const response = {
      status: 200,
      response: "ok"
    };

    const user = await userRepository.findOne(req.query.id);
    if (typeof user === "undefined") {
      response.status = 404;
      response.response = "not found";
    } else {
      user.name = req.query.name || "";
      await userRepository.save(user);
    }

    connection.close();
    res.json(response);
  } catch (err) {
    next(err);
  }
});

app.get("/delete", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const connection = await createConnection();
    const userRepository = connection.getRepository(User);
    const response = {
      status: 200,
      response: "ok"
    };

    const user = await userRepository.findOne(req.query.id);
    if (typeof user === "undefined") {
      response.status = 404;
      response.response = "not found";
    } else {
      await userRepository.remove(user);
    }

    connection.close();
    res.json(response);
  } catch (err) {
    next(err);
  }
});

app.get("/select", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const connection = await createConnection();
    const userRepository = connection.getRepository(User);
    const response = {
      status: 200,
      response: {}
    };

    const user = await userRepository.findOne(req.query.id);
    if (typeof user === "undefined") {
      response.status = 404;
      response.response = "not found";
    } else {
      response.response = {
        name: user.name,
        desc: user.description,
        views: user.views
      };
    }

    connection.close();
    res.json(response);
  } catch (err) {
    next(err);
  }
});

app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  console.log("err handler");
  console.log(err);
});

app.listen(port, () => console.log(`Example app listening port ${port}`));
