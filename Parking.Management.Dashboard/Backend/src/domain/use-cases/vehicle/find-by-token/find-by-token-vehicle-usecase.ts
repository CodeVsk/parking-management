import { IVehicleRepository } from "../../../contracts";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { Result } from "../../../../core/domain/result";
import { mapper } from "@/application/mappers";
import { Vehicle } from "@/domain/entities";

export class FindByTokenVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute(id: string): Promise<Result<VehicleDto[]>> {
    const result = await this.vehicleRepository.findByUserId(id);

    if (!result) {
      return new Result<VehicleDto[]>({
        message: "Veiculos não encontrados.",
      });
    }

    const vehicleDto = mapper.mapArray(result, Vehicle, VehicleDto);

    return new Result<VehicleDto[]>({
      content: vehicleDto,
      message: "Veiculos encontrados.",
    });
  }
}
