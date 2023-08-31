import { createMap } from "@automapper/core";
import { mapper } from "./mapper-config";
import { User } from "@/domain/entities";
import { UserDto } from "../dtos";

export class UserMapper {
  constructor() {
    createMap(mapper, User, UserDto);
    createMap(mapper, UserDto, User);
  }
}
