import { VehicleNote } from "../../domain/entities";
import { VehicleNoteDto } from "../dtos";

export class VehicleNoteMapper {
  mapper(data: VehicleNote | VehicleNoteDto): VehicleNote | VehicleNoteDto {
    const entitie: VehicleNote | VehicleNoteDto = {
      ...data,
    };

    return entitie;
  }
}
