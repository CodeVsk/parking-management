import { Prisma } from "@prisma/client";
import { Entity } from "../../core/domain/entity";
import { AutoMap } from "@automapper/classes";

export class Course
  extends Entity
  implements Prisma.CourseUncheckedCreateInput
{
  @AutoMap()
  name: string;
  @AutoMap()
  created_at?: Date;
  @AutoMap()
  updated_at?: Date;
  @AutoMap()
  collegeId: string;
}
