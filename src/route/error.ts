import { NextFunction, Response, Request } from "express";

const errorHandler = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("err handler");
  console.log(err);
};

export { errorHandler as ErrorHandler };
