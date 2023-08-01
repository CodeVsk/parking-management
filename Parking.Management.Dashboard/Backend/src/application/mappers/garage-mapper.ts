import { Garage } from "../../domain/entities";
import { GarageDto } from "../dtos";

export class GarageMapper {
  mapper(data: Garage | GarageDto): Garage | GarageDto {
    const entitie: Garage | GarageDto = {
      ...data,
    };

    return entitie;
  }
}
