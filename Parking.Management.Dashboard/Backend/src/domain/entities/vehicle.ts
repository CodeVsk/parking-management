import { Entity } from "../../core/domain/entity";

export class Vehicle extends Entity {
  model: string;
  type: string;
  plate: string;
  userId: string;
  collegeId: string;
  created_at: Date;
  updated_at: Date;
}
