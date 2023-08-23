import { User } from "../../domain/entities";
import { UserDto } from "../dtos";

export class UserMapper {
  mapper<T, D>(data: T): D {
    const entitie: D = {
      ...data,
    };

    return entitie;
  }
}
