import { Prisma } from "@prisma/client";
import { Entity } from "../../core/domain/entity";
import { UserRoles } from "../enums/user-roles";

export class User extends Entity implements Prisma.UserUncheckedCreateInput {
  name: string;
  email: string;
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
  created_at?: Date;
  updated_at?: Date;
}
