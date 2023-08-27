import { IVehicleResponsibleRepository } from "../../../contracts";
import { Result } from "../../../../core/domain/result";
import { VehicleResponsible } from "@/domain/entities";
import { VehicleResponsibleDto } from "@/application/dtos";
import { mapper } from "@/application/mappers";

export class DeleteVehicleResponsibleUseCase {
  constructor(
    private vehicleResponsibleRepository: IVehicleResponsibleRepository
  ) {}

  async execute(id: string): Promise<Result<VehicleResponsibleDto>> {
    const result = await this.vehicleResponsibleRepository.delete(id);

    const vehicleResponsibleDto = mapper.map(
      result,
      VehicleResponsible,
      VehicleResponsibleDto
    );

    return new Result<VehicleResponsibleDto>(
      vehicleResponsibleDto,
      "Universidade deletada com sucesso."
    );
  }
}
