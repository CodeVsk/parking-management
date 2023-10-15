import { Router } from "express";
import { adaptRoute } from "../../../infra/adapters/express-router-adapter";
import { authMiddleware } from "@/infra/factory/auth-factory";
import { findByIdVehicleController } from "@/domain/use-cases/vehicle/find-by-id";
import { getAllVehicleController } from "@/domain/use-cases/vehicle/get-all";
import { updateVehicleController } from "@/domain/use-cases/vehicle/update";
import { createVehicleController } from "@/domain/use-cases/vehicle/create";
import { deleteVehicleController } from "@/domain/use-cases/vehicle/delete";
import { statisticsVehicleController } from "@/domain/use-cases/vehicle/statistics";
import { findByTokenVehicleController } from "@/domain/use-cases/vehicle/find-by-token";
import { createVehicleByTokenController } from "@/domain/use-cases/vehicle/create-by-token";
import { deleteVehicleByTokenController } from "@/domain/use-cases/vehicle/delete-by-token";

export default (router: Router): void => {
  router.get(
    "/vehicle/id/:id",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(findByIdVehicleController)
  );
  router.get(
    "/vehicle/get-all",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(getAllVehicleController)
  );
  router.get(
    "/vehicle/statistics",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(statisticsVehicleController)
  );
  router.put(
    "/vehicle",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(updateVehicleController)
  );
  router.post(
    "/vehicle",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(createVehicleController)
  );
  router.delete(
    "/vehicle/id/:id",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(deleteVehicleController)
  );
  router.delete(
    "/vehicle/user/id/:id",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(deleteVehicleByTokenController)
  );
  router.get(
    "/vehicle/get-by-token",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(findByTokenVehicleController)
  );
  router.post(
    "/vehicle/by-token",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(createVehicleByTokenController)
  );
};
