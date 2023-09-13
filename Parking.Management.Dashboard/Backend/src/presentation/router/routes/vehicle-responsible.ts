import { Router } from "express";
import { adaptRoute } from "../../../infra/adapters/express-router-adapter";
import { authMiddleware } from "@/infra/factory/auth-factory";
import { FindByIdVehicleResponsibleController } from "@/domain/use-cases/vehicle-responsible/find-by-id/find-by-id-vehicle-responsible-controller";
import { updateVehicleResponsibleController } from "@/domain/use-cases/vehicle-responsible/update";
import { createVehicleNoteController } from "@/domain/use-cases/vehicle-note/create";
import { deleteVehicleNoteController } from "@/domain/use-cases/vehicle-note/delete";

export default (router: Router): void => {
  router.get(
    "/vehicle-responsible/id/:id",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(FindByIdVehicleResponsibleController)
  );
  router.put(
    "/vehicle-responsible",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(updateVehicleResponsibleController)
  );
  router.post(
    "/vehicle-responsible",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(createVehicleNoteController)
  );
  router.delete(
    "/vehicle-responsible/id/:id",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(deleteVehicleNoteController)
  );
};
