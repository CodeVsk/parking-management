import { User } from "../../entities";

export interface UserRepository {
  create(user: User): Promise<User>;
  update(user: User): Promise<User>;
  delete(id: string): Promise<User>;
  findById(id: string): Promise<User>;
}
