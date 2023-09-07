import { createMap } from "@automapper/core";
import { mapper } from "./mapper-config";
import { Vehicle } from "@/domain/entities";
import { VehicleDto } from "../dtos";

export class VehicleMapper {
  constructor() {
    createMap(mapper, Vehicle, VehicleDto);
    createMap(mapper, VehicleDto, Vehicle);
  }
}
