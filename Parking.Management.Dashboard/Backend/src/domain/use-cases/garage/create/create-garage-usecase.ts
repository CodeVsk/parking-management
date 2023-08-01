import { GarageRepository } from "../../../contracts";
import { GarageDto } from "../../../../application/dtos/garage-dto";
import { GarageMapper } from "../../../../application/mappers/garage-mapper";
import { Result } from "../../../../core/domain/result";

export class CreateGarageUseCase {
  constructor(
    private garageRepository: GarageRepository,
    private garageMapper: GarageMapper
  ) {}

  async execute(data: GarageDto): Promise<Result<GarageDto>> {
    const garageModel = this.garageMapper.mapper(data);

    const result = await this.garageRepository.create(garageModel);

    const garageDto = this.garageMapper.mapper(result);

    return new Result<GarageDto>(
      garageDto,
      "Estacionamento criado com sucesso."
    );
  }
}
