import { IVehicleResponsibleRepository } from "../../../contracts";
import { Result } from "../../../../core/domain/result";
import { mapper } from "@/application/mappers";
import { VehicleResponsible } from "@/domain/entities";
import { VehicleResponsibleDto } from "@/application/dtos";

export class FindByIdVehicleResponsibleUseCase {
  constructor(
    private vehicleResponsibleRepository: IVehicleResponsibleRepository
  ) {}

  async execute(id: string): Promise<Result<VehicleResponsibleDto>> {
    const result = await this.vehicleResponsibleRepository.findById(id);

    const vehicleResponsibleDto = mapper.map(
      result,
      VehicleResponsible,
      VehicleResponsibleDto
    );

    return new Result<VehicleResponsibleDto>(
      vehicleResponsibleDto,
      "Universidade encontrada."
    );
  }
}
