import { NextFunction, Request, Response } from "express";
import { ObjectSchema, ValidationOptions } from "joi";
import { ApiError } from "../helpers/api-errors";

type Property = "body" | "query";

const OPTIONS_CONFIG: ValidationOptions = {
  errors: {
    wrap: {
      label: "",
    },
  },
};

export const validateFieldsMiddleware = (
  schema: ObjectSchema,
  prop: Property
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[prop], OPTIONS_CONFIG);
    if (!error) return next();
    const response = error.details.map((detail) => detail.message);
    throw new ApiError("Invalid data", 422, response);
  };
};
