import express from "express";
import { setupRoutes } from "../../presentation/router/routes";

const app = express();

app.use(express.json());
setupRoutes(app);

export { app };
