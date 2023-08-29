import { Router } from "express";
import { adaptRoute } from "@/infra/adapters/express-router-adapter";
import { authLoginController } from "@/domain/use-cases/authentication/login";
import { authRegisterController } from "@/domain/use-cases/authentication/register";
import { authMiddleware } from "@/infra/factory/auth-factory";
import { authValidateController } from "@/domain/use-cases/authentication/validate";

export default (router: Router): void => {
  router.post("/login", adaptRoute(authLoginController));
  router.post("/validate", adaptRoute(authValidateController));
  router.post(
    "/register",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(authRegisterController)
  );
};
