import { createMap } from "@automapper/core";
import { mapper } from "./mapper-config";
import { Garage } from "@/domain/entities";
import { GarageDto } from "../dtos";

export class GarageMapper {
  constructor() {
    createMap(mapper, Garage, GarageDto);
  }
}
