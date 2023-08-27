export class ForbiddenError extends Error {
  constructor() {
    super("Forbidden");
    this.name = "Você não tem permissão para acessar este recurso.";
  }
}
