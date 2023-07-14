import { GenericRepository } from "../../../domain/contracts";

export class PrismaGenericRepository implements GenericRepository {
  async findById(id: string) {
    return "Teste";
  }
}
