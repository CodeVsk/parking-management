import { AutoMap } from "@automapper/classes";
import { EntityDto } from "./entity-dto";
import { VehicleDto } from "./vehicle-dto";
import { UserDto } from "./user-dto";

export class VehicleResponsibleDto extends EntityDto {
  @AutoMap()
  userId: string;
  @AutoMap()
  user?: UserDto;
  @AutoMap()
  vehicleId: string;
  @AutoMap()
  vehicle?: VehicleDto;
}
