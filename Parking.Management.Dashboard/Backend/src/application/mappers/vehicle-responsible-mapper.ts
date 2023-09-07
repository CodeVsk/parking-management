import { createMap } from "@automapper/core";
import { mapper } from "./mapper-config";
import { VehicleResponsible } from "@/domain/entities";
import { VehicleResponsibleDto } from "../dtos";

export class VehicleResponsibleMapper {
  constructor() {
    createMap(mapper, VehicleResponsible, VehicleResponsibleDto);
    createMap(mapper, VehicleResponsibleDto, VehicleResponsible);
  }
}
