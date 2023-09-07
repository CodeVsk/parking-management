import { IVehicleNoteRepository } from "../../../contracts";
import { Result } from "../../../../core/domain/result";
import { mapper } from "@/application/mappers";
import { VehicleNote } from "@/domain/entities";
import { VehicleNoteDto } from "@/application/dtos";

export class DeleteVehicleNoteUseCase {
  constructor(private vehicleNoteRepository: IVehicleNoteRepository) {}

  async execute(id: string): Promise<Result<VehicleNoteDto>> {
    const vehicleNote = this.vehicleNoteRepository.findById(id);

    if (!vehicleNote) {
      return new Result<VehicleNoteDto>({
        message: "Anotação de veiculo não encontrada.",
      });
    }

    const result = await this.vehicleNoteRepository.delete(id);

    const vehicleNoteDto = mapper.map(result, VehicleNote, VehicleNoteDto);

    return new Result<VehicleNoteDto>({
      content: vehicleNoteDto,
      message: "Anotação de veiculo deletada com sucesso.",
    });
  }
}
