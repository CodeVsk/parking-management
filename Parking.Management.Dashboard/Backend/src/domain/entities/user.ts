import { Prisma } from "@prisma/client";
import { Entity } from "../../core/domain/entity";
import { UserRoles, UserGender, UserPermissions } from "../enums";

export class User extends Entity implements Prisma.UserUncheckedCreateInput {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  rg: string;
  cpf: string;
  gender: UserGender;
  courseId: string;
  enrollment: string;
  status: boolean;
  collegeId: string;
  birthdate: Date;
  role: UserRoles;
  permissions: UserPermissions;
  created_at?: Date;
  updated_at?: Date;
}
