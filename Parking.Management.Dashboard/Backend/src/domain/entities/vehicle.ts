import { AutoMap } from "@automapper/classes";
import { Entity } from "../../core/domain/entity";

export class Vehicle extends Entity {
  @AutoMap()
  model: string;
  @AutoMap()
  type: string;
  @AutoMap()
  plate: string;
  @AutoMap()
  userId: string;
  @AutoMap()
  collegeId: string;
  @AutoMap()
  created_at?: Date;
  @AutoMap()
  updated_at?: Date;
}
