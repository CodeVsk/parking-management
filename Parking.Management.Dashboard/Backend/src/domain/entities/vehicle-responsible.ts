import { Entity } from "../../core/domain/entity";

export class VehicleResponsible extends Entity {
  userId: string;
  vehicleId: string;
  created_at?: Date;
  updated_at?: Date;
}
