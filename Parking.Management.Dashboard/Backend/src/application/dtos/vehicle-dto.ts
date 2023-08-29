import { AutoMap } from "@automapper/classes";
import { EntityDto } from "./entity-dto";

export class VehicleDto extends EntityDto {
  @AutoMap()
  model: string;
  @AutoMap()
  type: string;
  @AutoMap()
  plate: string;
  @AutoMap()
  userId: string;
  @AutoMap()
  collegeId: string;
}
