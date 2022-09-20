import { CorsOptions } from "cors";
import { ENV } from "./env";

export const corsConfig: CorsOptions = {
  origin: ENV.cors_origin,
  optionsSuccessStatus: 200,
};
