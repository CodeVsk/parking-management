export interface IGenericRepository {
  findById(id: string): Promise<string>;
}
