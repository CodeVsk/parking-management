import { Entity } from "../../core/domain/entity";

export class College extends Entity {
  name: string;
  address: string;
  city: string;
  campus: string;
  created_at?: Date;
  updated_at?: Date;
}
