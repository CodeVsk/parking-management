import { IAuthProvider } from "@/domain/contracts";
import { UserPayload } from "@/infra/providers/auth/types/user-payload";
import { NextFunction, Request, Response } from "express";

export class AuthMiddleware {
  constructor(private authProvider: IAuthProvider) {}

  isLogged(req: Request, res: Response, next: NextFunction) {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    const account: UserPayload = this.authProvider.verifyToken(token);

    if (account) {
      next();
    }

    return res
      .status(401)
      .json({ message: "Você deve estar logado para realizar está ação." });
  }

  isLoggedAdmin(req: Request, res: Response, next: NextFunction) {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    const isAdmin: boolean = this.authProvider.isAdmin(token);

    console.log(isAdmin);

    if (isAdmin) {
      next();
    }

    return res.status(401).json({
      message: "Você não possui permissões administrativas para está ação",
    });
  }
}
