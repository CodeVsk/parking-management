import { GenericRepository } from "../../../domain/contracts";

export abstract class PrismaGenericRepository<T> implements GenericRepository {
  private readonly model: T;

  constructor(model: T) {
    this.model = model;
  }

  async findById(id: string) {
    return "Teste";
  }
}
