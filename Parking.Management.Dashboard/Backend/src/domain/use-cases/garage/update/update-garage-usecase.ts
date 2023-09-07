import { IGarageRepository } from "../../../contracts";
import { GarageDto } from "../../../../application/dtos/garage-dto";
import { mapper } from "@/application/mappers/mapper-config";

import { Result } from "../../../../core/domain/result";
import { Garage } from "@/domain/entities";

export class UpdateGarageUseCase {
  constructor(private garageRepository: IGarageRepository) {}

  async execute(data: GarageDto): Promise<Result<GarageDto>> {
    const garage = await this.garageRepository.findById(data.id);

    if (!garage) {
      return new Result<GarageDto>({
        message: "Estacionamento não encontrado.",
      });
    }

    const garageModel = {
      ...garage,
      ...data,
    };

    const result = await this.garageRepository.update(garageModel);

    const garageDto = mapper.map(result, Garage, GarageDto);

    return new Result<GarageDto>({
      content: garageDto,
      message: "Estacionamento atualizado com sucesso.",
    });
  }
}
