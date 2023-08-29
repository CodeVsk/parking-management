import { Prisma } from "@prisma/client";
import { Entity } from "../../core/domain/entity";
import { UserRoles, UserGender, UserPermissions } from "../enums";
import { AutoMap } from "@automapper/classes";

export class User extends Entity implements Prisma.UserUncheckedCreateInput {
  @AutoMap()
  name: string;
  @AutoMap()
  email: string;
  @AutoMap()
  password: string;
  @AutoMap()
  phone: string;
  @AutoMap()
  address: string;
  @AutoMap()
  city: string;
  @AutoMap()
  state: string;
  @AutoMap()
  rg: string;
  @AutoMap()
  cpf: string;
  @AutoMap()
  gender: UserGender;
  @AutoMap()
  courseId: string;
  @AutoMap()
  enrollment: string;
  @AutoMap()
  status: boolean;
  @AutoMap()
  collegeId: string;
  @AutoMap()
  birthdate: Date;
  @AutoMap()
  role: UserRoles;
  @AutoMap()
  permissions: UserPermissions;
  @AutoMap()
  created_at?: Date;
  @AutoMap()
  updated_at?: Date;
}
