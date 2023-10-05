import { Router } from "express";
import { adaptRoute } from "../../../infra/adapters/express-router-adapter";
import { authMiddleware } from "@/infra/factory/auth-factory";
import { findByIdVehicleResponsibleController } from "@/domain/use-cases/vehicle-responsible/find-by-id";
import { updateVehicleResponsibleController } from "@/domain/use-cases/vehicle-responsible/update";
import { createVehicleResponsibleController } from "@/domain/use-cases/vehicle-responsible/create";
import { deleteVehicleResponsibleController } from "@/domain/use-cases/vehicle-responsible/delete";
import { findByIdTokenVehicleResponsibleController } from "@/domain/use-cases/vehicle-responsible/find-by-id-token";

export default (router: Router): void => {
  router.get(
    "/vehicle-responsible/id/:id",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(findByIdVehicleResponsibleController)
  );
  router.get(
    "/vehicle-responsible/user/id/:id",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(findByIdTokenVehicleResponsibleController)
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
};
