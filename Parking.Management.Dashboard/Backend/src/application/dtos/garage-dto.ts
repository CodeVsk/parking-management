import { AutoMap } from "@automapper/classes";
import { VehicleStatus } from "../../domain/enums/vehicle-status";
import { EntityDto } from "./entity-dto";
import { UserDto } from "./user-dto";
import { VehicleDto } from "./vehicle-dto";

export class GarageDto extends EntityDto {
  @AutoMap()
  status: VehicleStatus;
  @AutoMap()
  entryTime: Date;
  @AutoMap()
  departureTime?: Date;
  @AutoMap()
  collegeId: string;
  @AutoMap()
  vehicleId: string;
  @AutoMap()
  vehicle?: VehicleDto;
  @AutoMap()
  userEntryId: string;
  @AutoMap()
  userEntry?: UserDto;
  @AutoMap()
  userDepartureId?: string;
  @AutoMap()
  userDeparture?: UserDto;
}
