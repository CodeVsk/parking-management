import { IVehicleNoteRepository } from "../../../contracts";
import { Result } from "../../../../core/domain/result";
import { VehicleNote } from "@/domain/entities";
import { VehicleNoteDto } from "@/application/dtos";
import { mapper } from "@/application/mappers";

export class UpdateVehicleNoteUseCase {
  constructor(private vehicleNoteRepository: IVehicleNoteRepository) {}

  async execute(data: VehicleNoteDto): Promise<Result<VehicleNoteDto>> {
    const vehicleNote = await this.vehicleNoteRepository.findById(data.id);

    if (!vehicleNote) {
      return new Result<VehicleNoteDto>({
        message: "Anotação de veiculo não encontrada.",
      });
    }

    const vehicleNoteModel = {
      ...vehicleNote,
      ...data,
    };

    const result = await this.vehicleNoteRepository.update(vehicleNoteModel);

    const vehicleNoteDto = mapper.map(result, VehicleNote, VehicleNoteDto);

    return new Result<VehicleNoteDto>({
      content: vehicleNoteDto,
      message: "Anotação de veiculo atualizada com sucesso.",
    });
  }
}
