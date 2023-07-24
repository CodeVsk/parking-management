import { Entity } from "../../core/domain/entity";

export class VehicleNote extends Entity {
  description: string;
  vehicleId: string;
  created_at: Date;
  updated_at: Date;
}
