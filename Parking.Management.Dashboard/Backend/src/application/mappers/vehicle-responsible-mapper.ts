import { VehicleResponsible } from "../../domain/entities";
import { VehicleResponsibleDto } from "../dtos";

export class VehicleResponsibleMapper {
  mapper(
    data: VehicleResponsible | VehicleResponsibleDto
  ): VehicleResponsible | VehicleResponsibleDto {
    const entitie: VehicleResponsible | VehicleResponsibleDto = {
      ...data,
    };

    return entitie;
  }
}
