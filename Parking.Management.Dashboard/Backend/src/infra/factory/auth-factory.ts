import { AuthMiddleware } from "../http/middleware/auth-middleware";
import { AuthProvider } from "@/infra/providers/";

const provider = new AuthProvider();
const authMiddleware = new AuthMiddleware(provider);

export { authMiddleware };
