import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";

import * as UserApplicationService from "./application/user-application-service";

const app = express();
const port = 3000;

app.get("/insert", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await UserApplicationService.insertUser(
      req.query.name,
      req.query.desc,
      req.query.file
    );

    res.json({
      status: 200,
      response: "ok"
    });
  } catch (err) {
    next(err);
  }
});

app.get("/update", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = {
      status: 200,
      response: "ok"
    };

    const isUpdated = await UserApplicationService.updateUser(
      req.query.id,
      req.query.name
    );

    if (!isUpdated) {
      response.status = 404;
      response.response = "not found";
    }
    res.json(response);
  } catch (err) {
    next(err);
  }
});

app.get("/delete", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = {
      status: 200,
      response: "ok"
    };

    const isDeleted = await UserApplicationService.deleteUser(req.query.id);
    if (!isDeleted) {
      response.status = 404;
      response.response = "not found";
    }

    res.json(response);
  } catch (err) {
    next(err);
  }
});

app.get("/select", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = {
      status: 200,
      response: {}
    };
    response.response = await UserApplicationService.selectUser(req.query.id);
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
