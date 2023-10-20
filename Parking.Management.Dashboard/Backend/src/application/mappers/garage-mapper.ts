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
      ),
      forMember(
        (d) => d.userDeparture,
        mapFrom((source) => source.userDeparture)
      ),
      forMember(
        (d) => d.userEntry,
        mapFrom((source) => source.userEntry)
      ),
      forMember(
        (d) => d.vehicle,
        mapFrom((source) => source.vehicle)
      )
    );
    createMap(
      mapper,
      GarageDto,
      Garage,
      forMember(
        (d) => d.status,
        mapFrom((source) => source.status)
      ),
      forMember(
        (d) => d.userDeparture,
        mapFrom((source) => source.userDeparture)
      ),
      forMember(
        (d) => d.userEntry,
        mapFrom((source) => source.userEntry)
      ),
      forMember(
        (d) => d.vehicle,
        mapFrom((source) => source.vehicle)
      )
    );
  }
}
