import { AutoMap } from "@automapper/classes";
import { EntityDto } from "./entity-dto";

export class VehicleNoteDto extends EntityDto {
  @AutoMap()
  description: string;
  @AutoMap()
  vehicleId: string;
}
