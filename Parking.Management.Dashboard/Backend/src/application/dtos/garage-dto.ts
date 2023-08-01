import { VehicleStatus } from "../../domain/enums/vehicle-status";
import { EntityDto } from "./entity-dto";

export class GarageDto extends EntityDto {
  status: VehicleStatus;
  entryTime: Date;
  departureTime: Date;
  collegeId: string;
  vehicleId: string;
  userEntryId: string;
  userDepartureId: string;
}
