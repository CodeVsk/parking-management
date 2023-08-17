import { Router } from "express";
import { adaptRoute } from "../../../infra/adapters/express-router-adapter";
import { authMiddleware } from "@/infra/factory/auth-factory";
import { deleteUserController } from "@/domain/use-cases/user/delete";
import { createUserController } from "@/domain/use-cases/user/create";
import { updateUserController } from "@/domain/use-cases/user/update";
import { findByIdUserController } from "@/domain/use-cases/user/find-by-id";
import { AuthProvider } from "@/infra/providers";
import { AuthMiddleware } from "@/infra/http/middleware/auth-middleware";

export default (router: Router): void => {
  router.get(
    "/user/:id",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(findByIdUserController)
  );
  router.put("/user", adaptRoute(updateUserController));
  router.delete("/user/:id", adaptRoute(deleteUserController));
};
