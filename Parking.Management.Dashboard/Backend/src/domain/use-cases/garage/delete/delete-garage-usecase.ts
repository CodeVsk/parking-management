import { IGarageRepository } from "../../../contracts";
import { GarageDto } from "../../../../application/dtos/garage-dto";
import Mapper from "@/application/mappers";

import { Result } from "../../../../core/domain/result";

export class DeleteGarageUseCase {
  constructor(private garageRepository: IGarageRepository) {}

  async execute(id: string): Promise<Result<GarageDto>> {
    const result = await this.garageRepository.delete(id);

    const garageDto = await Mapper.map(result, GarageDto);

    return new Result<GarageDto>(
      garageDto,
      "Estacionamento deletada com sucesso."
    );
  }
}
