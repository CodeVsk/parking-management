export interface GenericRepository {
  findById(id: string): Promise<string>;
}
