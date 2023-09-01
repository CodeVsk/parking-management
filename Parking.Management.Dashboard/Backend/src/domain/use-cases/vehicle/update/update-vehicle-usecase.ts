import { IVehicleRepository } from "../../../contracts";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { VehicleMapper } from "../../../../application/mappers/vehicle-mapper";
import { Result } from "../../../../core/domain/result";
import { mapper } from "@/application/mappers";
import { Vehicle } from "@/domain/entities";

export class UpdateVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute(data: VehicleDto): Promise<Result<VehicleDto>> {
    const vehicle = await this.vehicleRepository.findById(data.id);

    if (!vehicle) {
      return new Result<VehicleDto>({
        message: "Veiculo não encontrado.",
      });
    }

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
