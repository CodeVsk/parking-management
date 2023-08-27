import { AutoMap } from "@automapper/classes";
import { VehicleStatus } from "../../domain/enums/vehicle-status";
import { EntityDto } from "./entity-dto";

export class GarageDto extends EntityDto {
  @AutoMap()
  status: VehicleStatus;
  @AutoMap()
  entryTime: Date;
  @AutoMap()
  departureTime: Date;
  @AutoMap()
  collegeId: string;
  @AutoMap()
  vehicleId: string;
  @AutoMap()
  userEntryId: string;
  @AutoMap()
  userDepartureId: string;
}
