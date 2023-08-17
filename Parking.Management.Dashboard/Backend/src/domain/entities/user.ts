import { Prisma } from "@prisma/client";
import { Entity } from "../../core/domain/entity";
import { UserRoles } from "../enums/user-roles";
import { UserPermissions } from "../enums/user-permissions";

export class User extends Entity implements Prisma.UserUncheckedCreateInput {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  rg: string;
  cpf: string;
  gender: string;
  course: string;
  enrollment: string;
  status: boolean;
  collegeId: string;
  birthdate: Date;
  role: UserRoles;
  permissions: UserPermissions;
  created_at?: Date;
  updated_at?: Date;
}
