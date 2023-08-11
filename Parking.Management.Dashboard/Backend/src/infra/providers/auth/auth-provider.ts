import * as jwt from "jsonwebtoken";
import { env } from "@/infra/config";
import { IAuthProvider } from "@/domain/contracts";

export class AuthProvider implements IAuthProvider {
  generateToken(userId: string): string {
    const token: string = jwt.sign({ userId }, env.jwt_secret, {
      expiresIn: "24h",
    });

    return token;
  }

  verifyToken(token: string): string | jwt.JwtPayload {
    try {
      const decoded: string | jwt.JwtPayload = jwt.verify(
        token,
        env.jwt_secret
      );

      return decoded;
    } catch (error) {
      throw new Error("Invalid token");
    }
  }
}
