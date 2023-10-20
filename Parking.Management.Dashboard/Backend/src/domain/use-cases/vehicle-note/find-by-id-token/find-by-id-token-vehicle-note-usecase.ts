import { IVehicleNoteRepository } from "../../../contracts";

import { Result } from "../../../../core/domain/result";
import { VehicleNote } from "@/domain/entities";
import { VehicleNoteDto } from "@/application/dtos";
import { mapper } from "@/application/mappers";
import { isEmpty } from "class-validator";

export class FindByIdTokenVehicleNoteUseCase {
  constructor(private vehicleNoteRepository: IVehicleNoteRepository) {}

  async execute(id: string, userId: string): Promise<Result<VehicleNoteDto[]>> {
    const result = await this.vehicleNoteRepository.findByIdToken(id, userId);

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
