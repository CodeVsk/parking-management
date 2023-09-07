import { createMap, forMember, mapFrom } from "@automapper/core";
import { mapper } from "./mapper-config";
import { Garage } from "@/domain/entities";
import { GarageDto } from "../dtos";

export class GarageMapper {
  constructor() {
    createMap(
      mapper,
      Garage,
      GarageDto,
      forMember(
        (d) => d.status,
        mapFrom((source) => source.status)
      )
    );
    createMap(
      mapper,
      GarageDto,
      Garage,
      forMember(
        (d) => d.status,
        mapFrom((source) => source.status)
      )
    );
  }
}
