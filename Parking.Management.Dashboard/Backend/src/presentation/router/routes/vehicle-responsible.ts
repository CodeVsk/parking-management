import { Router } from "express";
import { adaptRoute } from "../../../infra/adapters/express-router-adapter";
import { createCollegeController } from "../../../domain/use-cases/college/create";
import { updateCollegeController } from "../../../domain/use-cases/college/update";
import { findByIdCollegeController } from "../../../domain/use-cases/college/find-by-id";
import { deleteCollegeController } from "../../../domain/use-cases/college/delete";

export default (router: Router): void => {
  router.get("/vehicle/:id", adaptRoute(findByIdCollegeController));
  router.put("/vehicle", adaptRoute(updateCollegeController));
  router.post("/vehicle", adaptRoute(createCollegeController));
  router.delete("/vehicle/:id", adaptRoute(deleteCollegeController));
};
