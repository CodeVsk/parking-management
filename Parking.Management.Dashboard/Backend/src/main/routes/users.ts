import { Router } from "express";
import { createUserController } from "../../domain/use-cases/user";
import { adaptRoute } from "../adapters/express-router-adapter";

export default (router: Router): void => {
  router.post("/users", adaptRoute(createUserController));
};
