import { Prisma } from "@prisma/client";
import { Entity } from "../../core/domain/entity";
import { AutoMap } from "@automapper/classes";

export class College
  extends Entity
  implements Prisma.CollegeUncheckedCreateInput
{
  @AutoMap()
  name: string;
  @AutoMap()
  address: string;
  @AutoMap()
  city: string;
  @AutoMap()
  campus: string;
  @AutoMap()
  created_at?: Date;
  @AutoMap()
  updated_at?: Date;
}
