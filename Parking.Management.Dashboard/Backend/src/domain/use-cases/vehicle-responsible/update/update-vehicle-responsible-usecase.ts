import { IVehicleResponsibleRepository } from "../../../contracts";
import { Result } from "../../../../core/domain/result";
import { mapper } from "@/application/mappers";
import { VehicleResponsibleDto } from "@/application/dtos";
import { VehicleResponsible } from "@/domain/entities";

export class UpdateVehicleResponsibleUseCase {
  constructor(
    private vehicleResponsibleRepository: IVehicleResponsibleRepository
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

    const vehicleResponsibleDto = mapper.map(
      result,
      VehicleResponsible,
      VehicleResponsibleDto
    );

    return new Result<VehicleResponsibleDto>(
      vehicleResponsibleDto,
      "Universidade atualizada com sucesso."
    );
  }
}
