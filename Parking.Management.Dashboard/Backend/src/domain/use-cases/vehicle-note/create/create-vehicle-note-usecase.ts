import { IVehicleNoteRepository } from "../../../contracts";
import { Result } from "../../../../core/domain/result";
import { mapper } from "@/application/mappers";
import { VehicleNote } from "@/domain/entities";
import { VehicleNoteDto } from "@/application/dtos";

export class CreateVehicleNoteUseCase {
  constructor(private vehicleNoteRepository: IVehicleNoteRepository) {}

  async execute(data: VehicleNoteDto): Promise<Result<VehicleNoteDto>> {
    const vehicleNoteModel = mapper.map(data, VehicleNoteDto, VehicleNote);

    const result = await this.vehicleNoteRepository.create(vehicleNoteModel);

    const vehicleNoteDto = mapper.map(result, VehicleNote, VehicleNoteDto);

    return new Result<VehicleNoteDto>({
      content: vehicleNoteDto,
      message: "Anotação de veiculo criada com sucesso.",
    });
  }
}
