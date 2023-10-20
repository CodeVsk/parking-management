import { AutoMap } from "@automapper/classes";
import { Entity } from "../../core/domain/entity";
import { TypeVehicle } from "../enums/vehicle-type";
import { User } from "./user";
import { College } from "./college";

export class Vehicle extends Entity {
  @AutoMap()
  model: string;
  @AutoMap()
  type: TypeVehicle;
  @AutoMap()
  plate: string;
  @AutoMap()
  userId: string;
  @AutoMap()
  user?: User;
  @AutoMap()
  collegeId: string;
  @AutoMap()
  college?: College;
  @AutoMap()
  created_at?: Date;
  @AutoMap()
  updated_at?: Date;
  @AutoMap()
  color: string;
  @AutoMap()
  brand: string;
}
