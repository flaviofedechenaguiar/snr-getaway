import express from "express";
import { validateFields } from "../../utils/fields-validation-middleware";
import { SeniorController } from "./login/controller";
import { loginSchema } from "./login/schema";
const router = express.Router();

router.post(
  "/login",
  [validateFields(loginSchema, "body")],
  SeniorController.login
);

export default router;
