import { Router } from "express";
import { adaptRoute } from "../../../infra/adapters/express-router-adapter";
import { createCollegeController } from "../../../domain/use-cases/college/create";

export default (router: Router): void => {
  router.post("/college", adaptRoute(createCollegeController));
};
