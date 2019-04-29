import "reflect-metadata";
import express from "express";

import { UserRouter } from "./route/user";
import { ErrorHandler } from "./route/error";

const app = express();
const port = 3000;

app.use("/", UserRouter);
app.use(ErrorHandler);

app.listen(port, () => console.log(`Example app listening port ${port}`));
