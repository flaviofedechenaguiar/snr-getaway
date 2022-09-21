import { Router } from "express";
import { validateFieldsMiddleware } from "../../middleware/fields-validation";
import { SeniorController } from "./login/controller";
import { loginSchema } from "./login/schema";
const routes = Router();

routes.post(
  "/login",
  [validateFieldsMiddleware(loginSchema, "body")],
  SeniorController.login
);

export default routes;
