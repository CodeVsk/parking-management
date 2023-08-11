import jwt from "jsonwebtoken";

export interface IAuthProvider {
  generateToken(userId: string): string;
  verifyToken(token: string): string | jwt.JwtPayload;
}
