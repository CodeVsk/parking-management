import { Entity } from "../../core/domain/entity";
import { Roles } from "../enums/roles";

export class User extends Entity {
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
  role: Roles;
  created_at: Date;
  updated_at: Date;
}
