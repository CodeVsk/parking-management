import { Vehicle } from "../../domain/entities";
import { VehicleDto } from "../dtos";

export class VehicleMapper {
  mapper(data: Vehicle | VehicleDto): Vehicle | VehicleDto {
    const entitie: Vehicle | VehicleDto = {
      ...data,
    };

    return entitie;
  }
}
