import { IVehicleRepository } from "../../../contracts";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { Result } from "../../../../core/domain/result";
import { mapper } from "@/application/mappers";
import { Vehicle } from "@/domain/entities";

export class GetAllVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute(): Promise<Result<VehicleDto[]>> {
    const result = await this.vehicleRepository.getAll();

    const vehiclesDto = await mapper.mapArrayAsync(result, Vehicle, VehicleDto);

    return new Result<VehicleDto[]>({
      content: vehiclesDto,
      message: "Veiculos encontrados.",
    });
  }
}
