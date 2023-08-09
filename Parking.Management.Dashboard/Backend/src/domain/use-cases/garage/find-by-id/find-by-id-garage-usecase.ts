import { GarageRepository } from "../../../contracts";
import { GarageDto } from "../../../../application/dtos/garage-dto";
import { GarageMapper } from "../../../../application/mappers/garage-mapper";
import { Result } from "../../../../core/domain/result";

export class FindByIdGarageUseCase {
  constructor(
    private garageRepository: GarageRepository,
    private garageMapper: GarageMapper
  ) {}

  async execute(id: string): Promise<Result<GarageDto>> {
    const result = await this.garageRepository.findById(id);

    const garageDto = this.garageMapper.mapper(result);

    return new Result<GarageDto>(garageDto, "Estacionamento encontrado.");
  }
}