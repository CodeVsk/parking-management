import { Router } from "express";
import { adaptRoute } from "../../../infra/adapters/express-router-adapter";
import { createCollegeController } from "../../../domain/use-cases/college/create";
import { updateCollegeController } from "../../../domain/use-cases/college/update";
import { findByIdCollegeController } from "../../../domain/use-cases/college/find-by-id";
import { deleteCollegeController } from "../../../domain/use-cases/college/delete";
import { authMiddleware } from "@/infra/factory/auth-factory";

export default (router: Router): void => {
  router.get(
    "/vehicle-responsible/id/:id",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(findByIdCollegeController)
  );
  router.put(
    "/vehicle-responsible",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(updateCollegeController)
  );
  router.post(
    "/vehicle-responsible",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(createCollegeController)
  );
  router.delete(
    "/vehicle-responsible/id/:id",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(deleteCollegeController)
  );
};
