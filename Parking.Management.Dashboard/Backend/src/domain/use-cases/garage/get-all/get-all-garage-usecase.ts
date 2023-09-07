import { IGarageRepository } from "../../../contracts";
import { GarageDto } from "../../../../application/dtos/garage-dto";
import { mapper } from "@/application/mappers/mapper-config";

import { Result } from "../../../../core/domain/result";
import { Garage } from "@/domain/entities";

export class GetAllGarageUseCase {
  constructor(private garageRepository: IGarageRepository) {}

  async execute(): Promise<Result<GarageDto[]>> {
    const result = await this.garageRepository.getAll();

    const garagesDto = await mapper.mapArrayAsync(result, Garage, GarageDto);

    return new Result<GarageDto[]>({
      content: garagesDto,
      message: "Estacionamentos encontrados.",
    });
  }
}
