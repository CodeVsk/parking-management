import { IVehicleNoteRepository } from "../../../contracts";

import { Result } from "../../../../core/domain/result";
import { VehicleNote } from "@/domain/entities";
import { VehicleNoteDto } from "@/application/dtos";
import { mapper } from "@/application/mappers";
import { isEmpty } from "class-validator";

export class FindByIdVehicleNoteUseCase {
  constructor(private vehicleNoteRepository: IVehicleNoteRepository) {}

  async execute(id: string): Promise<Result<VehicleNoteDto[]>> {
    const result = await this.vehicleNoteRepository.findById(id);
    console.log(result);
    if (!result || isEmpty(result)) {
      return new Result<VehicleNoteDto[]>({
        message: "Anotações do veiculo não encontrada.",
      });
    }

    const vehicleNoteDto = mapper.mapArray(result, VehicleNote, VehicleNoteDto);

    return new Result<VehicleNoteDto[]>({
      content: vehicleNoteDto,
      message: "Anotação de veiculo encontrada.",
    });
  }
}
