import { AutoMap } from "@automapper/classes";
import { EntityDto } from "./entity-dto";

export class CollegeDto extends EntityDto {
  @AutoMap()
  name: string;
  @AutoMap()
  address: string;
  @AutoMap()
  city: string;
  @AutoMap()
  campus: string;
}
