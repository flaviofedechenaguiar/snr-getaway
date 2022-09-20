import axios, { AxiosInstance } from "axios";
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";
import { ENV } from "./env";

const jar = new CookieJar();

const instance: AxiosInstance = wrapper(
  axios.create({
    baseURL: ENV.snr_address,
    jar,
  })
);

export const api = instance;
