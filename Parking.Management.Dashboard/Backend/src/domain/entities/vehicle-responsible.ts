import { AutoMap } from "@automapper/classes";
import { Entity } from "../../core/domain/entity";

export class VehicleResponsible extends Entity {
  @AutoMap()
  userId: string;
  @AutoMap()
  vehicleId: string;
  @AutoMap()
  created_at?: Date;
  @AutoMap()
  updated_at?: Date;
}
