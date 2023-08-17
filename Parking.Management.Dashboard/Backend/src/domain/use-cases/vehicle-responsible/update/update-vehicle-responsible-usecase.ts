import { IVehicleResponsibleRepository } from "../../../contracts";
import { VehicleResponsibleDto } from "../../../../application/dtos/vehicle-responsible-dto";
import { VehicleResponsibleMapper } from "../../../../application/mappers/vehicle-responsible-mapper";
import { Result } from "../../../../core/domain/result";

export class UpdateVehicleResponsibleUseCase {
  constructor(
    private vehicleResponsibleRepository: IVehicleResponsibleRepository,
    private vehicleResponsibleMapper: VehicleResponsibleMapper
  ) {}

  async execute(
    data: VehicleResponsibleDto
  ): Promise<Result<VehicleResponsibleDto>> {
    const vehicleResponsible = await this.vehicleResponsibleRepository.findById(
      data.id
    );

    const vehicleResponsibleModel = {
      ...vehicleResponsible,
      ...data,
    };

    const result = await this.vehicleResponsibleRepository.update(
      vehicleResponsibleModel
    );

    const vehicleResponsibleDto = this.vehicleResponsibleMapper.mapper(result);

    return new Result<VehicleResponsibleDto>(
      vehicleResponsibleDto,
      "Universidade atualizada com sucesso."
    );
  }
}
