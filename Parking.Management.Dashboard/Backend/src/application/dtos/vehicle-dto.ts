import { EntityDto } from "./entity-dto";

export class VehicleDto extends EntityDto {
  model: string;
  type: string;
  plate: string;
  userId: string;
  collegeId: string;
}
