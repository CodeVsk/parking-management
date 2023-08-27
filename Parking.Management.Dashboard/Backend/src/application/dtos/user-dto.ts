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
import { AutoMap } from "@automapper/classes";

export class UserDto extends EntityDto {
  @AutoMap()
  @IsNotEmpty({ message: "O nome é obrigatório." })
  name: string;

  @AutoMap()
  @IsEmail({}, { message: "O email é obrigatório." })
  email: string;

  @AutoMap()
  @MinLength(6, { message: "A senha é obrigatória." })
  password: string;

  @AutoMap()
  @IsNotEmpty({ message: "O telefone é obrigatório." })
  phone: string;

  @AutoMap()
  @IsNotEmpty({ message: "O endereço é obrigatório." })
  address: string;

  @AutoMap()
  @IsNotEmpty({ message: "O estado é obrigatório." })
  state: string;

  @AutoMap()
  @IsNotEmpty({ message: "A cidade é obrigatória." })
  city: string;

  @AutoMap()
  @IsNotEmpty({ message: "O rg é obrigatório." })
  rg: string;

  @AutoMap()
  @IsNotEmpty({ message: "O cpf é obrigatório." })
  cpf: string;

  @AutoMap()
  @IsEnum(Gender, { message: "O genêro é obrigatório." })
  gender: UserGender;

  @AutoMap()
  @IsNotEmpty({ message: "O curso é obrigatório." })
  courseId: string;

  @AutoMap()
  @IsNotEmpty({ message: "A matricula é obrigatória." })
  enrollment: string;

  @AutoMap()
  @IsBoolean({ message: "O status do usuário é obrigatório." })
  status: boolean;

  @AutoMap()
  @IsNotEmpty({ message: "A universidade é obrigatória." })
  collegeId: string;

  @AutoMap()
  @IsDateString({}, { message: "A data de aniversário é obrigatória." })
  birthdate: Date;

  @AutoMap()
  @IsEnum(Role, { message: "A função é obrigatória." })
  role: UserRoles;

  @AutoMap()
  @IsEnum(Permission, { message: "A permissão é obrigatória." })
  permissions: UserPermissions;
}
