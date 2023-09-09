import { Router } from "express";
import { adaptRoute } from "../../../infra/adapters/express-router-adapter";
import { createVehicleNoteController } from "../../../domain/use-cases/vehicle-note/create";
import { updateVehicleNoteController } from "../../../domain/use-cases/vehicle-note/update";
import { findByIdVehicleNoteController } from "../../../domain/use-cases/vehicle-note/find-by-id";
import { deleteVehicleNoteController } from "../../../domain/use-cases/vehicle-note/delete";
import { authMiddleware } from "@/infra/factory/auth-factory";

export default (router: Router): void => {
  router.get(
    "/vehicle-note/id/:id",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(findByIdVehicleNoteController)
  );
  router.put(
    "/vehicle-note",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(updateVehicleNoteController)
  );
  router.post(
    "/vehicle-note",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(createVehicleNoteController)
  );
  router.delete(
    "/vehicle-note/id/:id",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(deleteVehicleNoteController)
  );
};
