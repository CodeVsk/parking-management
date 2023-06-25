import { Entity } from "../../core/domain/entity";

type VehicleResponsibleProps = {
  userId: string;
  vehicleId: string;
  createdAt: Date;
  updatedAt: Date;
};

export class VehicleResponsible extends Entity<VehicleResponsibleProps> {}
