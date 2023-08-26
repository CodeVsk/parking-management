import { IGarageRepository } from "../../../contracts";
import { GarageDto } from "../../../../application/dtos/garage-dto";
import Mapper from "@/application/mappers";

import { Result } from "../../../../core/domain/result";

export class UpdateGarageUseCase {
  constructor(private garageRepository: IGarageRepository) {}

  async execute(data: GarageDto): Promise<Result<GarageDto>> {
    const garage = await this.garageRepository.findById(data.id);

    const garageModel = {
      ...garage,
      ...data,
    };

    const result = await this.garageRepository.update(garageModel);

    const garageDto = await Mapper.map(result, GarageDto);

    return new Result<GarageDto>(
      garageDto,
      "Estacionamento atualizado com sucesso."
    );
  }
}
