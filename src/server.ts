import cors from "cors";
import express from "express";
import { corsConfig } from "./configs/cors";
import router from "./routes";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsConfig));

app.use(router);

export default app;
