import { IGarageRepository } from "../../../contracts";
import { GarageDto } from "../../../../application/dtos/garage-dto";
import { mapper } from "@/application/mappers/mapper-config";

import { Result } from "../../../../core/domain/result";
import { Garage } from "@/domain/entities";

export class DeleteGarageUseCase {
  constructor(private garageRepository: IGarageRepository) {}

  async execute(id: string): Promise<Result<GarageDto>> {
    const garage = await this.garageRepository.findById(id);

    if (!garage) {
      return new Result<GarageDto>({
        message: "Estacionamento não encontrado.",
      });
    }

    const result = await this.garageRepository.delete(id);

    const garageDto = mapper.map(result, Garage, GarageDto);

    return new Result<GarageDto>({
      content: garageDto,
      message: "Estacionamento deletado com sucesso.",
    });
  }
}
