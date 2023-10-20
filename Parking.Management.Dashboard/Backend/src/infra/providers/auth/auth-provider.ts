import * as jwt from "jsonwebtoken";
import { env } from "@/infra/config";
import { IAuthProvider } from "@/domain/contracts";
import { UserPayload } from "./types/user-payload";
import { UserPermissions } from "@/domain/enums/user-permissions";

export class AuthProvider implements IAuthProvider {
  generateToken(userId: string, isAdmin: boolean): string {
    try {
      const data: UserPayload = {
        userId,
        isAdmin,
      };

      const token: string = jwt.sign(data, env.jwt_secret, {
        expiresIn: "24h",
      });

      return token;
    } catch (err) {
      throw new Error("Ocorreu um erro na geração de seu token");
    }
  }

  verifyToken(token: string): UserPayload {
    try {
      const decoded: UserPayload = jwt.verify(
        token,
        env.jwt_secret
      ) as UserPayload;

      return decoded;
    } catch (err) {
      if (err.expiredAt) {
        throw new Error("O token de usuário está expirado");
      }

      throw new Error("Ocorreu um erro na validação de seu token");
    }
  }

  isAdmin(token: string): boolean {
    try {
      const data: UserPayload = this.verifyToken(token);

      if (data.isAdmin) {
        return true;
      }

      return false;
    } catch (err) {
      throw new Error(
        "Ocorreu um erro na validação de seu token administrativo"
      );
    }
  }
}
