import { NextFunction, Request, Response } from "express";
import { ApiError } from "../helpers/api-errors";

export const errorHandlingMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    return res
      .status(err.statusCode)
      .json({ message: err.message, errors: err.errors });
  }

  return res.status(500).send("An unexpected error has occurred.");
};
