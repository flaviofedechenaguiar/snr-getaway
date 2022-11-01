import * as dotenv from "dotenv";

if (process.env.NODE_ENV === "development") dotenv.config();

export const ENV = {
  port: process.env.PORT,
  cors_origin: process.env.CORS_ORIGIN,
  snr_address: process.env.SNR_ADDRESS,
};
