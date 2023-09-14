import { createMap, forMember, mapFrom } from "@automapper/core";
import { mapper } from "./mapper-config";
import { Vehicle } from "@/domain/entities";
import { VehicleDto } from "../dtos";

export class VehicleMapper {
  constructor() {
    createMap(
      mapper,
      Vehicle,
      VehicleDto,
      forMember(
        (d) => d.type,
        mapFrom((source) => source.type)
      ),
      forMember(
        (d) => d.user,
        mapFrom((source) => source.user)
      ),
      forMember(
        (d) => d.college,
        mapFrom((source) => source.college)
      )
    );
    createMap(
      mapper,
      VehicleDto,
      Vehicle,
      forMember(
        (d) => d.type,
        mapFrom((source) => source.type)
      ),
      forMember(
        (d) => d.user,
        mapFrom((source) => source.user)
      ),
      forMember(
        (d) => d.college,
        mapFrom((source) => source.college)
      )
    );
  }
}
