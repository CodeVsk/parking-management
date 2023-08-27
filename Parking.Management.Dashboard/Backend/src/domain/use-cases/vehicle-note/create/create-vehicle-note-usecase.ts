import { IVehicleNoteRepository } from "../../../contracts";
import { VehicleNoteDto } from "../../../../application/dtos/vehicle-note-dto";
import { VehicleNoteMapper } from "../../../../application/mappers/vehicle-note-mapper";
import { Result } from "../../../../core/domain/result";

export class CreateVehicleNoteUseCase {
  constructor(
    private vehicleNoteRepository: IVehicleNoteRepository,
    private vehicleNoteMapper: VehicleNoteMapper
  ) {}

  async execute(data: VehicleNoteDto): Promise<Result<VehicleNoteDto>> {
    const vehicleNoteModel = this.vehicleNoteawait Mapper.mapper(data);

    const result = await this.vehicleNoteRepository.create(vehicleNoteModel);

    const vehicleNoteDto = this.vehicleNoteawait Mapper.mapper(result);

    return new Result<VehicleNoteDto>(
      vehicleNoteDto,
      "Universidade criada com sucesso."
    );
  }
}
