import * as jwt from "jsonwebtoken";
import { env } from "@/infra/config";
import { IAuthProvider } from "@/domain/contracts";
import { UserPayload } from "./types/user-payload";

export class AuthProvider implements IAuthProvider {
  generateToken(userId: string): string {
    const token: string = jwt.sign({ userId }, env.jwt_secret, {
      expiresIn: "24h",
    });

    return token;
  }

  verifyToken(token: string): UserPayload {
    try {
      const decoded: UserPayload = jwt.verify(
        token,
        env.jwt_secret
      ) as UserPayload;

      return decoded;
    } catch (error) {
      throw new Error("Invalid token");
    }
  }

  isAdmin(token: string): boolean {
    try {
      const data: UserPayload = this.verifyToken(token);

      if (data.isAdmin) {
        return true;
      }

      return false;
    } catch (error) {
      throw new Error("Error in admin validation permission");
    }
  }
}
