import { Prisma } from "@prisma/client";
import { Entity } from "../../core/domain/entity";

export class Course
  extends Entity
  implements Prisma.CourseUncheckedCreateInput
{
  name: string;
  created_at?: Date;
  updated_at?: Date;
  collegeId: string;
}
