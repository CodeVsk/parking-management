import { IGarageRepository } from "../../../contracts";
import { GarageDto } from "../../../../application/dtos/garage-dto";
import { GarageMapper } from "../../../../application/mappers/garage-mapper";
import { Result } from "../../../../core/domain/result";

export class UpdateGarageUseCase {
  constructor(
    private garageRepository: IGarageRepository,
    private garageMapper: GarageMapper
  ) {}

  async execute(data: GarageDto): Promise<Result<GarageDto>> {
    const garage = await this.garageRepository.findById(data.id);

    const garageModel = {
      ...garage,
      ...data,
    };

    const result = await this.garageRepository.update(garageModel);

    const garageDto = this.garageMapper.mapper(result);

    return new Result<GarageDto>(
      garageDto,
      "Estacionamento atualizado com sucesso."
    );
  }
}
