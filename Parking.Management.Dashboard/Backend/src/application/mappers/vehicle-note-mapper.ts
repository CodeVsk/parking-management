import { createMap } from "@automapper/core";
import { mapper } from "./mapper-config";
import { VehicleNote } from "@/domain/entities";
import { VehicleNoteDto } from "../dtos";

export class VehicleNoteMapper {
  constructor() {
    createMap(mapper, VehicleNote, VehicleNoteDto);
    createMap(mapper, VehicleNoteDto, VehicleNote);
  }
}
