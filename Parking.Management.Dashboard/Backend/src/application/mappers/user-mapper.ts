import { createMap, forMember, mapFrom, mapWith } from "@automapper/core";
import { mapper } from "./mapper-config";
import { User } from "@/domain/entities";
import { UserDto } from "../dtos";
import { Role } from "@prisma/client";
import { UserRoles, UserGender, UserPermissions } from "@/domain/enums";

export class UserMapper {
  constructor() {
    createMap(
      mapper,
      User,
      UserDto,
      forMember(
        (d) => d.role,
        mapFrom((source) => source.role)
      ),
      forMember(
        (d) => d.gender,
        mapFrom((source) => source.gender)
      ),
      forMember(
        (d) => d.permissions,
        mapFrom((source) => source.permissions)
      )
    );
    createMap(
      mapper,
      UserDto,
      User,
      forMember(
        (d) => d.role,
        mapFrom((source) => source.role)
      ),
      forMember(
        (d) => d.gender,
        mapFrom((source) => source.gender)
      ),
      forMember(
        (d) => d.permissions,
        mapFrom((source) => source.permissions)
      )
    );
  }
}
