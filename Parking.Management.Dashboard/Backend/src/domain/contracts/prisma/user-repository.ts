import { User } from "../../entities";

export interface IUserRepository {
  create(user: User): Promise<User>;
  update(user: User): Promise<User>;
  delete(id: string): Promise<User>;
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
}
