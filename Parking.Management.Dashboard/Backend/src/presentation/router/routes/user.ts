import { Router } from "express";
import { adaptRoute } from "../../../infra/adapters/express-router-adapter";
import { authMiddleware } from "@/infra/factory/auth-factory";
import { deleteUserController } from "@/domain/use-cases/user/delete";
import { updateUserController } from "@/domain/use-cases/user/update";
import { findByIdUserController } from "@/domain/use-cases/user/find-by-id";
import { getAllUserController } from "@/domain/use-cases/user/get-all";
import { findByTokenUserController } from "@/domain/use-cases/user/find-by-token";
import { createUserController } from "@/domain/use-cases/user/create";

export default (router: Router): void => {
  router.get(
    "/user",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(findByTokenUserController)
  );
  router.get(
    "/user/id/:id",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(findByIdUserController)
  );
  router.get(
    "/user/get-all",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(getAllUserController)
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
