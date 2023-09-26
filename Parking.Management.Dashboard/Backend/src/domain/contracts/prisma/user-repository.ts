import { User } from "../../entities";

export interface IUserRepository {
  create(user: User): Promise<User>;
  createMany(users: User[]): Promise<number>;
  update(user: User): Promise<User>;
  delete(id: string): Promise<User>;
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  getAll(): Promise<User[]>;
  count(): Promise<number>;
  countByDate(startDate: Date, endDate: Date): Promise<number>;
}
