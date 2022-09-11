import express from "express";
import seniorRoutes from "./domains/senior/login/routes";
const router = express.Router();

router.use("/senior", seniorRoutes);

export default router;
