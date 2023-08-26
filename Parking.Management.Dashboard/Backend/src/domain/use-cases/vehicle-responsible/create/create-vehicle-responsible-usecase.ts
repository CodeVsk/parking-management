import { IVehicleResponsibleRepository } from "../../../contracts";
import { VehicleResponsibleDto } from "../../../../application/dtos/vehicle-responsible-dto";
import { VehicleResponsibleMapper } from "../../../../application/mappers/vehicle-responsible-mapper";
import { Result } from "../../../../core/domain/result";

export class CreateVehicleResponsibleUseCase {
  constructor(
    private vehicleResponsibleRepository: IVehicleResponsibleRepository,
    private vehicleResponsibleMapper: VehicleResponsibleMapper
  ) {}

  async execute(
    data: VehicleResponsibleDto
  ): Promise<Result<VehicleResponsibleDto>> {
    const vehicleResponsibleModel = this.vehicleResponsibleawait Mapper.mapper(data);

    const result = await this.vehicleResponsibleRepository.create(
      vehicleResponsibleModel
    );

    const vehicleResponsibleDto = this.vehicleResponsibleawait Mapper.mapper(result);

    return new Result<VehicleResponsibleDto>(
      vehicleResponsibleDto,
      "Universidade criada com sucesso."
    );
  }
}
