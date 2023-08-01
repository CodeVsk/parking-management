import { VehicleRepository } from "../../../contracts";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { VehicleMapper } from "../../../../application/mappers";
import { Result } from "../../../../core/domain/result";

export class CreateVehicleUseCase {
  constructor(
    private vehicleRepository: VehicleRepository,
    private vehicleMapper: VehicleMapper
  ) {}

  async execute(data: VehicleDto): Promise<Result<VehicleDto>> {
    const vehicleModel = this.vehicleMapper.mapper(data);

    const result = await this.vehicleRepository.create(vehicleModel);

    const vehicleDto = this.vehicleMapper.mapper(result);

    return new Result<VehicleDto>(
      vehicleDto,
      "Universidade criada com sucesso."
    );
  }
}
