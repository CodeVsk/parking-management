import { Router } from "express";
import { adaptRoute } from "@/infra/adapters/express-router-adapter";
import { createCourseController } from "@/domain/use-cases/course/create";
import { updateCourseController } from "@/domain/use-cases/course/update";
import { findByIdCourseController } from "@/domain/use-cases/course/find-by-id";
import { deleteCourseController } from "@/domain/use-cases/course/delete";
import { authMiddleware } from "@/infra/factory/auth-factory";

export default (router: Router): void => {
  router.get(
    "/course/:id",
    (req, res, next) => authMiddleware.isLogged(req, res, next),
    adaptRoute(findByIdCourseController)
  );
  router.put(
    "/course",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(updateCourseController)
  );
  router.post(
    "/course",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(createCourseController)
  );
  router.delete(
    "/course/:id",
    (req, res, next) => authMiddleware.isLoggedAdmin(req, res, next),
    adaptRoute(deleteCourseController)
  );
};
