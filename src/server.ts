import cors from "cors";
import express from "express";
import "express-async-errors";
import { corsConfig } from "./configs/cors";
import { errorHandlingMiddleware } from "./middleware/error-handling";
import router from "./routes";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsConfig));

app.use(router);
app.use(errorHandlingMiddleware);

export default app;
