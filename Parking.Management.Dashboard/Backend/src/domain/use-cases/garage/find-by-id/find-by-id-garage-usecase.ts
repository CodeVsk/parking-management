import { IGarageRepository } from "../../../contracts";
import { GarageDto } from "../../../../application/dtos/garage-dto";
import { mapper } from "@/application/mappers/mapper-config";

import { Result } from "../../../../core/domain/result";
import { Garage } from "@/domain/entities";

export class FindByIdGarageUseCase {
  constructor(private garageRepository: IGarageRepository) {}

  async execute(id: string): Promise<Result<GarageDto>> {
    const result = await this.garageRepository.findById(id);

    if (!result) {
      return new Result<GarageDto>({
        message: "Estacionamento não encontrado.",
      });
    }

    const garageDto = mapper.map(result, Garage, GarageDto);

    return new Result<GarageDto>({
      content: garageDto,
      message: "Estacionamento encontrado.",
    });
  }
}
