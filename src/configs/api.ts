import axios, { AxiosInstance } from "axios";
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";

const jar = new CookieJar();

const instance: AxiosInstance = wrapper(
  axios.create({
    baseURL: "https://platform.senior.com.br/",
    jar,
  })
);

export const api = instance;
