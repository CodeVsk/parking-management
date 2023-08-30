import { AutoMap } from "@automapper/classes";
import { EntityDto } from "./entity-dto";

export class CourseDto extends EntityDto {
  @AutoMap()
  name: string;
  @AutoMap()
  collegeId: string;
}
