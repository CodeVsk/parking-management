import { Entity } from "../../core/domain/entity";
import { College } from "./college";

type UserProps = {
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
  role: Role;
};

enum Role {
  STUDENT,
  EMPLOYEE,
}

export class User extends Entity<UserProps> {}
