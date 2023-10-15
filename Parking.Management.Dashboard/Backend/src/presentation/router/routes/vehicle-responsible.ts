import { Router } from "express";
import { adaptRoute } from "../../../infra/adapters/express-router-adapter";
import { authMiddleware } from "@/infra/factory/auth-factory";
import { findByIdVehicleResponsibleController } from "@/domain/use-cases/vehicle-responsible/find-by-id";
import { updateVehicleResponsibleController } from "@/domain/use-cases/vehicle-responsible/update";
import { createVehicleResponsibleController } from "@/domain/use-cases/vehicle-responsible/create";
import { deleteVehicleResponsibleController } from "@/domain/use-cases/vehicle-responsible/delete";
import { findByIdTokenVehicleResponsibleController } from "@/domain/use-cases/vehicle-responsible/find-by-id-token";
import { createVehicleResponsibleByTokenController } from "@/domain/use-cases/vehicle-responsible/create-by-token";
import { deleteVehicleResponsibleByTokenController } from "@/domain/use-cases/vehicle-responsible/delete-by-token";

export default (router: Router): void => {
  /* Admin Endpoints */

  router.get(
    "/vehicle-responsible/id/:id",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(findByIdVehicleResponsibleController)
  );
  router.put(
    "/vehicle-responsible",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(updateVehicleResponsibleController)
  );
  router.post(
    "/vehicle-responsible",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(createVehicleResponsibleController)
  );
  router.delete(
    "/vehicle-responsible/id/:id",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(deleteVehicleResponsibleController)
  );

  /* User Endpoints */

  router.get(
    "/vehicle-responsible/user/id/:id",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(findByIdTokenVehicleResponsibleController)
  );

  router.post(
    "/vehicle-responsible/user",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(createVehicleResponsibleByTokenController)
  );
  router.delete(
    "/vehicle-responsible/user/id/:id",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(deleteVehicleResponsibleByTokenController)
  );
};
