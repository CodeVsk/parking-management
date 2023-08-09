import { VehicleNoteRepository } from "../../../contracts";
import { VehicleNoteDto } from "../../../../application/dtos/vehicle-note-dto";
import { VehicleNoteMapper } from "../../../../application/mappers/vehicle-note-mapper";
import { Result } from "../../../../core/domain/result";

export class FindByIdVehicleNoteUseCase {
  constructor(
    private vehicleNoteRepository: VehicleNoteRepository,
    private vehicleNoteMapper: VehicleNoteMapper
  ) {}

  async execute(id: string): Promise<Result<VehicleNoteDto>> {
    const result = await this.vehicleNoteRepository.findById(id);

    const vehicleNoteDto = this.vehicleNoteMapper.mapper(result);

    return new Result<VehicleNoteDto>(
      vehicleNoteDto,
      "Universidade encontrada."
    );
  }
}