import { IAuthProvider } from "@/domain/contracts";
import { UserPayload } from "@/infra/providers/auth/types/user-payload";
import { HttpResponse } from "@/presentation/helpers/http";
import { NextFunction, Request, Response, response } from "express";

export class AuthMiddleware {
  constructor(private authProvider: IAuthProvider) {}

  isLogged(req: Request, res: Response, next: NextFunction): HttpResponse {
    try {
      const token = req.header("Authorization")?.replace("Bearer ", "");

      const account: UserPayload = this.authProvider.verifyToken(token);

      if (!account) {
        const response = HttpResponse.unauthorizedError();

        return res.status(response.statusCode).json(response);
      }

      next();
    } catch (err) {
      const response = HttpResponse.badRequest(err);

      return res.status(response.statusCode).json(response);
    }
  }

  isLoggedAdmin(req: Request, res: Response, next: NextFunction): HttpResponse {
    try {
      const token = req.header("Authorization")?.replace("Bearer ", "");

      if (token == undefined) {
        const response = HttpResponse.badRequest(
          new Error("Você deve passar um token de autorização")
        );

        return res.status(response.statusCode).json(response);
      }

      const isAdmin: boolean = this.authProvider.isAdmin(token);

      if (!isAdmin) {
        const response = HttpResponse.unauthorizedError();

        return res.status(response.statusCode).json(response);
      }

      next();
    } catch (err) {
      const response = HttpResponse.badRequest(err);

      return res.status(response.statusCode).json(response);
    }
  }
}
