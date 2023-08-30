import { IGarageRepository } from "../../../contracts";
import { GarageDto } from "../../../../application/dtos/garage-dto";
import { mapper } from "@/application/mappers/mapper-config";

import { Result } from "../../../../core/domain/result";

export class DeleteGarageUseCase {
  constructor(private garageRepository: IGarageRepository) {}

  async execute(id: string): Promise<Result<GarageDto>> {
    const result = await this.garageRepository.delete(id);

    const garageDto = mapper.map(result, Garage, GarageDto);

    return new Result<GarageDto>(
      garageDto,
      "Estacionamento deletada com sucesso."
    );
  }
}
