import { UserPayload } from "@/infra/providers/auth/types/user-payload";

export interface IAuthProvider {
  generateToken(userId: string): string;
  verifyToken(token: string): UserPayload;
  isAdmin(token: string): boolean;
}
