import { IVehicleRepository } from "../../../contracts";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { Result } from "../../../../core/domain/result";
import { mapper } from "@/application/mappers";
import { Vehicle } from "@/domain/entities";

export class DeleteVehicleByTokenUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute(id: string, userId: string): Promise<Result<VehicleDto>> {
    const vehicle = await this.vehicleRepository.findById(id);

    if (!vehicle) {
      return new Result<VehicleDto>({
        message: "Veiculo não encontrado.",
      });
    }

    if (vehicle.userId != userId) {
      return new Result<VehicleDto>({
        message: "O veiculo não pertence ao seu usuário.",
      });
    }

    const result = await this.vehicleRepository.delete(id);

    const vehicleDto = mapper.map(result, Vehicle, VehicleDto);

    return new Result<VehicleDto>({
      content: vehicleDto,
      message: "Veiculo deletado com sucesso.",
    });
  }
}
