import { VehicleResponsibleRepository } from "../../../contracts";
import { VehicleResponsibleDto } from "../../../../application/dtos/vehicle-responsible-dto";
import { VehicleResponsibleMapper } from "../../../../application/mappers/vehicle-responsible-mapper";
import { Result } from "../../../../core/domain/result";

export class DeleteVehicleResponsibleUseCase {
  constructor(
    private vehicleResponsibleRepository: VehicleResponsibleRepository,
    private vehicleResponsibleMapper: VehicleResponsibleMapper
  ) {}

  async execute(id: string): Promise<Result<VehicleResponsibleDto>> {
    const result = await this.vehicleResponsibleRepository.delete(id);

    const vehicleResponsibleDto = this.vehicleResponsibleMapper.mapper(result);

    return new Result<VehicleResponsibleDto>(
      vehicleResponsibleDto,
      "Universidade deletada com sucesso."
    );
  }
}
