export class AuthenticatedDto {
  token: string;
  role: string;
  userId: string;
  expireIn?: number;
}
