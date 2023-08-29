import { IVehicleNoteRepository } from "../../../contracts";

import { Result } from "../../../../core/domain/result";
import { VehicleNote } from "@/domain/entities";
import { VehicleNoteDto } from "@/application/dtos";
import { mapper } from "@/application/mappers";

export class FindByIdVehicleNoteUseCase {
  constructor(private vehicleNoteRepository: IVehicleNoteRepository) {}

  async execute(id: string): Promise<Result<VehicleNoteDto>> {
    const result = await this.vehicleNoteRepository.findById(id);

    const vehicleNoteDto = mapper.map(result, VehicleNote, VehicleNoteDto);

    return new Result<VehicleNoteDto>(
      vehicleNoteDto,
      "Universidade encontrada."
    );
  }
}
