import { AutoMap } from "@automapper/classes";
import { EntityDto } from "./entity-dto";

export class VehicleResponsibleDto extends EntityDto {
  @AutoMap()
  userId: string;
  @AutoMap()
  vehicleId: string;
}
