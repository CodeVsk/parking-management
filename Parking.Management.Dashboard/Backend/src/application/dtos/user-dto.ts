import { UserRoles } from "../../domain/enums/user-roles";
import { EntityDto } from "./entity-dto";

export class UserDto extends EntityDto {
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
}
