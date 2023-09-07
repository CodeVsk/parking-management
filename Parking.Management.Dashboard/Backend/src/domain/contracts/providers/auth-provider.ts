import { Result } from "@/core/domain/result";
import { UserPayload } from "@/infra/providers/auth/types/user-payload";

export interface IAuthProvider {
  generateToken(userId: string, isAdmin: boolean): string;
  verifyToken(token: string): UserPayload;
  isAdmin(token: string): boolean;
}
