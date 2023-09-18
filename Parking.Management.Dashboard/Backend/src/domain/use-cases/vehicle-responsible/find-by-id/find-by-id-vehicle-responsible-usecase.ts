import { IVehicleResponsibleRepository } from "../../../contracts";
import { Result } from "../../../../core/domain/result";
import { mapper } from "@/application/mappers";
import { VehicleResponsible } from "@/domain/entities";
import { VehicleResponsibleDto } from "@/application/dtos";

export class FindByIdVehicleResponsibleUseCase {
  constructor(
    private vehicleResponsibleRepository: IVehicleResponsibleRepository
  ) {}

  async execute(id: string): Promise<Result<VehicleResponsibleDto[]>> {
    const result = await this.vehicleResponsibleRepository.findById(id);

    if (!result) {
      return new Result<VehicleResponsibleDto[]>({
        message: "Responsáveis pelo veiculo não foram encontrados.",
      });
    }
    const vehicleResponsibleDto = mapper.mapArray(
      result,
      VehicleResponsible,
      VehicleResponsibleDto
    );

    return new Result<VehicleResponsibleDto[]>({
      content: vehicleResponsibleDto,
      message: "Responsaveis pelo veiculo encontrados.",
    });
  }
}
