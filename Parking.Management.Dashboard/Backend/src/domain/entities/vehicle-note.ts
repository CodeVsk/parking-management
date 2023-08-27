import { AutoMap } from "@automapper/classes";
import { Entity } from "../../core/domain/entity";

export class VehicleNote extends Entity {
  @AutoMap()
  description: string;
  @AutoMap()
  vehicleId: string;
  @AutoMap()
  created_at?: Date;
  @AutoMap()
  updated_at?: Date;
}
