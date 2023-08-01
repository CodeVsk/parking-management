import { VehicleRepository } from "../../../contracts";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { VehicleMapper } from "../../../../application/mappers/vehicle-mapper";
import { Result } from "../../../../core/domain/result";

export class UpdateVehicleUseCase {
  constructor(
    private vehicleRepository: VehicleRepository,
    private vehicleMapper: VehicleMapper
  ) {}

  async execute(data: VehicleDto): Promise<Result<VehicleDto>> {
    const vehicle = await this.vehicleRepository.findById(data.id);

    const vehicleModel = {
      ...vehicle,
      ...data,
    };

    const result = await this.vehicleRepository.update(vehicleModel);

    const vehicleDto = this.vehicleMapper.mapper(result);

    return new Result<VehicleDto>(
      vehicleDto,
      "Universidade atualizada com sucesso."
    );
  }
}
