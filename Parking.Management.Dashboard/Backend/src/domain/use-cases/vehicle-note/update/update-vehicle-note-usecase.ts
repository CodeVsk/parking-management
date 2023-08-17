import { IVehicleNoteRepository } from "../../../contracts";
import { VehicleNoteDto } from "../../../../application/dtos/vehicle-note-dto";
import { VehicleNoteMapper } from "../../../../application/mappers/vehicle-note-mapper";
import { Result } from "../../../../core/domain/result";

export class UpdateVehicleNoteUseCase {
  constructor(
    private vehicleNoteRepository: IVehicleNoteRepository,
    private vehicleNoteMapper: VehicleNoteMapper
  ) {}

  async execute(data: VehicleNoteDto): Promise<Result<VehicleNoteDto>> {
    const vehicleNote = await this.vehicleNoteRepository.findById(data.id);

    const vehicleNoteModel = {
      ...vehicleNote,
      ...data,
    };

    const result = await this.vehicleNoteRepository.update(vehicleNoteModel);

    const vehicleNoteDto = this.vehicleNoteMapper.mapper(result);

    return new Result<VehicleNoteDto>(
      vehicleNoteDto,
      "Universidade atualizada com sucesso."
    );
  }
}
