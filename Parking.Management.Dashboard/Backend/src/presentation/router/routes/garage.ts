import { Router } from "express";
import { adaptRoute } from "../../../infra/adapters/express-router-adapter";
import { createGarageController } from "../../../domain/use-cases/garage/create";
import { updateGarageController } from "../../../domain/use-cases/garage/update";
import { findByIdGarageController } from "../../../domain/use-cases/garage/find-by-id";
import { deleteGarageController } from "../../../domain/use-cases/garage/delete";
import { authMiddleware } from "@/infra/factory/auth-factory";
import { getAllGarageController } from "@/domain/use-cases/garage/get-all";
import { countInsideGarageController } from "@/domain/use-cases/garage/count-inside";
import { latestUpdatedGarageController } from "@/domain/use-cases/garage/latest-updated";

export default (router: Router): void => {
  router.get(
    "/garage/id/:id",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(findByIdGarageController)
  );
  router.get(
    "/garage/get-all",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(getAllGarageController)
  );
  router.get(
    "/garage/count-inside",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(countInsideGarageController)
  );
  router.get(
    "/garage/latest-updated",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(latestUpdatedGarageController)
  );
  router.put(
    "/garage",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(updateGarageController)
  );
  router.post(
    "/garage",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(createGarageController)
  );
  router.delete(
    "/garage/id/:id",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(deleteGarageController)
  );
};
