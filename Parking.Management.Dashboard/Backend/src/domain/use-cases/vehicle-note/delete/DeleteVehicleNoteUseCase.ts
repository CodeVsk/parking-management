import { IVehicleNoteRepository } from "../../../contracts";
import { VehicleNoteDto } from "../../../../application/dtos/vehicle-note-dto";
import { Result } from "../../../../core/domain/result";
import { mapper } from "@/application/mappers";
import { VehicleNote } from "@/domain/entities";

export class DeleteVehicleNoteUseCase {
  constructor(private vehicleNoteRepository: IVehicleNoteRepository) {}

  async execute(id: string): Promise<Result<VehicleNoteDto>> {
    const result = await this.vehicleNoteRepository.delete(id);

    const vehicleNoteDto = mapper.map(result, VehicleNote, VehicleNoteDto);

    return new Result<VehicleNoteDto>(
      vehicleNoteDto,
      "Universidade deletada com sucesso."
    );
  }
}
