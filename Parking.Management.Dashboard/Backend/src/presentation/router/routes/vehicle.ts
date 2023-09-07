import { Router } from "express";
import { adaptRoute } from "../../../infra/adapters/express-router-adapter";
import { createGarageController } from "../../../domain/use-cases/garage/create";
import { updateGarageController } from "../../../domain/use-cases/garage/update";
import { findByIdGarageController } from "../../../domain/use-cases/garage/find-by-id";
import { deleteGarageController } from "../../../domain/use-cases/garage/delete";
import { authMiddleware } from "@/infra/factory/auth-factory";
import { getAllGarageController } from "@/domain/use-cases/garage/get-all";

export default (router: Router): void => {
  router.get(
    "/vehicle/:id",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(findByIdGarageController)
  );
  router.get(
    "/vehicle/get-all",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(getAllGarageController)
  );
  router.put(
    "/vehicle",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(updateGarageController)
  );
  router.post(
    "/vehicle",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(createGarageController)
  );
  router.delete(
    "/vehicle/:id",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(deleteGarageController)
  );
};
