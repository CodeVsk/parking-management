import { IVehicleRepository } from "../../../contracts";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { VehicleMapper } from "../../../../application/mappers/vehicle-mapper";
import { Result } from "../../../../core/domain/result";
import { mapper } from "@/application/mappers";
import { Vehicle } from "@/domain/entities";

export class UpdateByTokenVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute(data: VehicleDto, userId: string): Promise<Result<VehicleDto>> {
    const vehicle = await this.vehicleRepository.findById(data.id);

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

    data.collegeId = vehicle.collegeId;

    const vehicleModel = {
      ...vehicle,
      ...data,
    };

    const result = await this.vehicleRepository.update(vehicleModel);

    const vehicleDto = mapper.map(result, Vehicle, VehicleDto);

    return new Result<VehicleDto>({
      content: vehicleDto,
      message: "Veiculo atualizado com sucesso.",
    });
  }
}
