import { VehicleRepository } from "../../../contracts";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { VehicleMapper } from "../../../../application/mappers/vehicle-mapper";
import { Result } from "../../../../core/domain/result";

export class FindByIdVehicleUseCase {
  constructor(
    private vehicleRepository: VehicleRepository,
    private vehicleMapper: VehicleMapper
  ) {}

  async execute(id: string): Promise<Result<VehicleDto>> {
    const result = await this.vehicleRepository.findById(id);

    const vehicleDto = this.vehicleMapper.mapper(result);

    return new Result<VehicleDto>(vehicleDto, "Universidade encontrada.");
  }
}
