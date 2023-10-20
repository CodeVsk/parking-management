import { IGarageRepository } from "../../../contracts";
import { GarageDto } from "../../../../application/dtos/garage-dto";
import { Result } from "../../../../core/domain/result";
import { mapper } from "@/application/mappers/mapper-config";
import { Garage } from "@/domain/entities";
import { randomUUID } from "crypto";

export class CreateGarageUseCase {
  constructor(private garageRepository: IGarageRepository) {}

  async execute(data: GarageDto): Promise<Result<GarageDto>> {
    const garageModel = mapper.map(data, GarageDto, Garage);

    const result = await this.garageRepository.create(garageModel);

    const garageDto = mapper.map(result, Garage, GarageDto);

    return new Result<GarageDto>({
      content: garageDto,
      message: "Estacionamento criado com sucesso.",
    });
  }
}
