import { IVehicleRepository } from "../../../contracts";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { Result } from "../../../../core/domain/result";
import { mapper } from "@/application/mappers";
import { Vehicle } from "@/domain/entities";

export class FindByIdTokenVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute(id: string, userId: string): Promise<Result<VehicleDto>> {
    const result = await this.vehicleRepository.findById(id);

    if (!result) {
      return new Result<VehicleDto>({
        message: "Veiculos não encontrados.",
      });
    }

    if (result.userId != userId) {
      return new Result<VehicleDto>({
        message: "O veiculo não pertence ao seu usuário.",
      });
    }

    const vehicleDto = mapper.map(result, Vehicle, VehicleDto);

    return new Result<VehicleDto>({
      content: vehicleDto,
      message: "Veiculo encontrados.",
    });
  }
}
