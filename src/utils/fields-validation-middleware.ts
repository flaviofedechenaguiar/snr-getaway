import { NextFunction, Request, Response } from "express";
import { ObjectSchema, ValidationOptions } from "joi";

type Property = "body" | "query";

const OPTIONS_CONFIG: ValidationOptions = {
  errors: {
    wrap: {
      label: "",
    },
  },
};

export const validateFields = (schema: ObjectSchema, prop: Property) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[prop], OPTIONS_CONFIG);
    if (!error) return next();
    const response = error.details.map((detail) => detail.message);
    return res.status(422).json({ error: response });
  };
};
