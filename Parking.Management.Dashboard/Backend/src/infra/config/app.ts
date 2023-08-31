import express from "express";
import cors from "cors";
import { setupRoutes } from "../../presentation/router/routes";
import { mapper } from "./mapper";

const app = express();

mapper.createMapper();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

setupRoutes(app);

export { app };
