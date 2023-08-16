import { IVehicleNoteRepository } from "../../../contracts";
import { VehicleNoteDto } from "../../../../application/dtos/vehicle-note-dto";
import { VehicleNoteMapper } from "../../../../application/mappers/vehicle-note-mapper";
import { Result } from "../../../../core/domain/result";

export class DeleteVehicleNoteUseCase {
  constructor(
    private vehicleNoteRepository: IVehicleNoteRepository,
    private vehicleNoteMapper: VehicleNoteMapper
  ) {}

  async execute(id: string): Promise<Result<VehicleNoteDto>> {
    const result = await this.vehicleNoteRepository.delete(id);

    const vehicleNoteDto = this.vehicleNoteMapper.mapper(result);

    return new Result<VehicleNoteDto>(
      vehicleNoteDto,
      "Universidade deletada com sucesso."
    );
  }
}
