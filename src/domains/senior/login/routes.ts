import express from "express";
import { validateFields } from "./../../../utils/fields-validation-middleware";
import { SeniorController } from "./controller";
import { loginSchema } from "./schemas/login-schema";
const router = express.Router();

router.post(
  "/login",
  [validateFields(loginSchema, "body")],
  SeniorController.login
);

export default router;
