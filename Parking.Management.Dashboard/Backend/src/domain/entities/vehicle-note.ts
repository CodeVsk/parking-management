import { Entity } from "../../core/domain/entity";

type VehicleNoteProps = {
  description: string;
  vehicleId: string;
  createAt: Date;
  updatedAt: Date;
};

export class VehicleNote extends Entity<VehicleNoteProps> {}
