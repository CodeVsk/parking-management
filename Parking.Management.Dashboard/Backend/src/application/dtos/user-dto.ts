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
import { Permission, Role } from "@prisma/client";

export class UserDto extends EntityDto {
  @IsNotEmpty({ message: "O nome é obrigatório." })
  name: string;

  @IsEmail({}, { message: "O email é obrigatório." })
  email: string;

  @MinLength(6, { message: "A senha é obrigatória." })
  password: string;

  @IsNotEmpty({ message: "O telefone é obrigatório." })
  phone: string;

  @IsNotEmpty({ message: "O endereço é obrigatório." })
  address: string;

  @IsNotEmpty({ message: "O rg é obrigatório." })
  rg: string;

  @IsNotEmpty({ message: "O cpf é obrigatório." })
  cpf: string;

  @IsNotEmpty({ message: "O genêro é obrigatório." })
  gender: string;

  @IsNotEmpty({ message: "O curso é obrigatório." })
  course: string;

  @IsNotEmpty({ message: "A matricula é obrigatória." })
  enrollment: string;

  @IsBoolean({ message: "O status do usuário é obrigatório." })
  status: boolean;

  @IsNotEmpty({ message: "A universidade é obrigatória." })
  collegeId: string;

  @IsDateString({}, { message: "A data de aniversário é obrigatória." })
  birthdate: Date;

  @IsEnum(Role, { message: "A função é obrigatória." })
  role: UserRoles;

  @IsEnum(Permission, { message: "A permissão é obrigatória." })
  permissions: UserPermissions;
}
