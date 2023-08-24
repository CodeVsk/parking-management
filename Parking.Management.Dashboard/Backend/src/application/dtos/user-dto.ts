import { UserPermissions } from "@/domain/enums/user-permissions";
import { UserRoles } from "../../domain/enums/user-roles";
import { EntityDto } from "./entity-dto";
import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  MinLength,
} from "class-validator";
import { Gender, Permission, Role } from "@prisma/client";
import { UserGender } from "@/domain/enums";

export class UserDto extends EntityDto {
  //@IsNotEmpty({ message: "O nome é obrigatório." })
  name: string;

  //@IsEmail({}, { message: "O email é obrigatório." })
  email: string;

  //@MinLength(6, { message: "A senha é obrigatória." })
  password: string;

  //@IsNotEmpty({ message: "O telefone é obrigatório." })
  phone: string;

  //@IsNotEmpty({ message: "O endereço é obrigatório." })
  address: string;

  // @IsNotEmpty({ message: "O estado é obrigatório." })
  state: string;

  //@IsNotEmpty({ message: "A cidade é obrigatória." })
  city: string;

  //@IsNotEmpty({ message: "O rg é obrigatório." })
  rg: string;

  //@IsNotEmpty({ message: "O cpf é obrigatório." })
  cpf: string;

  //@IsEnum(Gender, { message: "O genêro é obrigatório." })
  gender: UserGender;

  //@IsNotEmpty({ message: "O curso é obrigatório." })
  courseId: string;

  //@IsNotEmpty({ message: "A matricula é obrigatória." })
  enrollment: string;

  //@IsBoolean({ message: "O status do usuário é obrigatório." })
  status: boolean;

  //@IsNotEmpty({ message: "A universidade é obrigatória." })
  collegeId: string;

  //@IsDateString({}, { message: "A data de aniversário é obrigatória." })
  birthdate: Date;

  //@IsEnum(Role, { message: "A função é obrigatória." })
  role: UserRoles;

  //@IsEnum(Permission, { message: "A permissão é obrigatória." })
  permissions: UserPermissions;
}
