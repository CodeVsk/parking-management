import { AutoMap } from "@automapper/classes";
import { EntityDto } from "./entity-dto";
import { TypeVehicle } from "@/domain/enums/vehicle-type";
import { UserDto } from "./user-dto";
import { CollegeDto } from "./college-dto";

export class VehicleDto extends EntityDto {
  @AutoMap()
  model: string;
  @AutoMap()
  type: TypeVehicle;
  @AutoMap()
  plate: string;
  @AutoMap()
  userId: string;
  @AutoMap()
  user?: UserDto;
  @AutoMap()
  collegeId: string;
  @AutoMap()
  college?: CollegeDto;
  @AutoMap()
  color: string;
  @AutoMap()
  brand: string;
}
