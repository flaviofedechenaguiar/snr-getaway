import { Router } from "express";
import seniorRoutes from "./domains/senior/routes";
const routes = Router();

routes.use("/senior", seniorRoutes);

export default routes;
