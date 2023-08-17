import { IVehicleRepository } from "../../../contracts";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { VehicleMapper } from "../../../../application/mappers/vehicle-mapper";
import { Result } from "../../../../core/domain/result";

export class DeleteVehicleUseCase {
  constructor(
    private vehicleRepository: IVehicleRepository,
    private vehicleMapper: VehicleMapper
  ) {}

  async execute(id: string): Promise<Result<VehicleDto>> {
    const result = await this.vehicleRepository.delete(id);

    const vehicleDto = this.vehicleMapper.mapper(result);

    return new Result<VehicleDto>(
      vehicleDto,
      "Universidade deletada com sucesso."
    );
  }
}
