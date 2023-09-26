import { IGarageRepository } from "../../../contracts";

import { Result } from "../../../../core/domain/result";

export class CountInsideGarageUseCase {
  constructor(private garageRepository: IGarageRepository) {}

  async execute(): Promise<Result<number>> {
    const result = await this.garageRepository.countInside();

    return new Result<number>({
      content: result,
      message: "Veiculos no estacionamento encontrados.",
    });
  }
}
