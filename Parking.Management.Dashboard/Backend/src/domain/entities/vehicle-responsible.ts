import { AutoMap } from "@automapper/classes";
import { Entity } from "../../core/domain/entity";
import { Vehicle } from "./vehicle";
import { User } from "./user";

export class VehicleResponsible extends Entity {
  @AutoMap()
  userId: string;
  @AutoMap()
  user?: User;
  @AutoMap()
  vehicleId: string;
  @AutoMap()
  vehicle?: Vehicle;
  @AutoMap()
  created_at?: Date;
  @AutoMap()
  updated_at?: Date;
}
