import { Router } from "express";
import { adaptRoute } from "@/infra/adapters/express-router-adapter";
import { authMiddleware } from "@/infra/factory/auth-factory";
import { createByUserIdController } from "@/domain/use-cases/qrcode/create-by-userid";

export default (router: Router): void => {
  router.get(
    "/qrcode",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(createByUserIdController)
  );
};
