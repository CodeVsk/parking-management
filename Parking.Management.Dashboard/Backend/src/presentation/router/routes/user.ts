import { Router } from "express";
import { adaptRoute } from "../../../infra/adapters/express-router-adapter";
import { authMiddleware } from "@/infra/factory/auth-factory";
import { deleteUserController } from "@/domain/use-cases/user/delete";
import { updateUserController } from "@/domain/use-cases/user/update";
import { findByIdUserController } from "@/domain/use-cases/user/find-by-id";

export default (router: Router): void => {
  router.get(
    "/user/:id",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(findByIdUserController)
  );
  router.put(
    "/user",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(updateUserController)
  );
  router.delete(
    "/user/:id",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(deleteUserController)
  );
};
