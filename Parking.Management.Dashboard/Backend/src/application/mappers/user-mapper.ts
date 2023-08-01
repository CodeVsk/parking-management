import { User } from "../../domain/entities";
import { UserDto } from "../dtos";

export class UserMapper {
  mapper(data: User | UserDto): User | UserDto {
    const entitie: User | UserDto = {
      ...data,
    };

    return entitie;
  }
}
