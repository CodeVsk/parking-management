import express from "express";
import cors from "cors";
import { setupRoutes } from "../../presentation/router/routes";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

setupRoutes(app);

export { app };
