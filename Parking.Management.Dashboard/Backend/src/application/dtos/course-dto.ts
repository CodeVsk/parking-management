import { AutoMap } from "@automapper/classes";
import { EntityDto } from "./entity-dto";
import { CollegeDto } from "./college-dto";

export class CourseDto extends EntityDto {
  @AutoMap()
  name: string;
  @AutoMap()
  collegeId: string;
  @AutoMap()
  college?: CollegeDto;
}
