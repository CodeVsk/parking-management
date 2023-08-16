import { Router } from "express";
import { adaptRoute } from "@/infra/adapters/express-router-adapter";
import { authLoginController } from "@/domain/use-cases/authentication/login";
import { authRegisterController } from "@/domain/use-cases/authentication/register";

export default (router: Router): void => {
  router.post("/login", adaptRoute(authLoginController));
  router.post("/register", adaptRoute(authRegisterController));
};
