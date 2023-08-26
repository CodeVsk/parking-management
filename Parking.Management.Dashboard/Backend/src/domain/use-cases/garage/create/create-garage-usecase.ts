import { IGarageRepository } from "../../../contracts";
import { GarageDto } from "../../../../application/dtos/garage-dto";
import { Result } from "../../../../core/domain/result";
import Mapper from "@/application/mappers";
import { Garage } from "@/domain/entities";

export class CreateGarageUseCase {
  constructor(private garageRepository: IGarageRepository) {}

  async execute(data: GarageDto): Promise<Result<GarageDto>> {
    const garageModel = await Mapper.map(data, Garage);

    const result = await this.garageRepository.create(garageModel);

    const garageDto = await Mapper.map(result, GarageDto);

    return new Result<GarageDto>(
      garageDto,
      "Estacionamento criado com sucesso."
    );
  }
}
