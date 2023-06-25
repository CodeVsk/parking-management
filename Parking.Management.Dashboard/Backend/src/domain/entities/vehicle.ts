import { Entity } from "../../core/domain/entity";

type VehicleProps = {
  model: string;
  type: string;
  plate: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export class Vehicle extends Entity<VehicleProps> {}
