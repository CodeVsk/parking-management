import { createMap, forMember, mapFrom } from "@automapper/core";
import { mapper } from "./mapper-config";
import { VehicleResponsible } from "@/domain/entities";
import { VehicleResponsibleDto } from "../dtos";

export class VehicleResponsibleMapper {
  constructor() {
    createMap(
      mapper,
      VehicleResponsible,
      VehicleResponsibleDto,
      forMember(
        (d) => d.user,
        mapFrom((source) => source.user)
      ),
      forMember(
        (d) => d.vehicle,
        mapFrom((source) => source.vehicle)
      )
    );
    createMap(
      mapper,
      VehicleResponsibleDto,
      VehicleResponsible,
      forMember(
        (d) => d.user,
        mapFrom((source) => source.user)
      ),
      forMember(
        (d) => d.vehicle,
        mapFrom((source) => source.vehicle)
      )
    );
  }
}
