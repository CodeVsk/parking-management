import { IVehicleResponsibleRepository } from "../../../contracts";
import { Result } from "../../../../core/domain/result";
import { mapper } from "@/application/mappers";
import { VehicleResponsible } from "@/domain/entities";
import { VehicleResponsibleDto } from "@/application/dtos";

export class FindByIdTokenVehicleResponsibleUseCase {
  constructor(
    private vehicleResponsibleRepository: IVehicleResponsibleRepository
  ) {}

  async execute(
    id: string,
    userId: string
  ): Promise<Result<VehicleResponsibleDto[]>> {
    const result = await this.vehicleResponsibleRepository.findByVehicleUserId(
      id,
      userId
    );

    console.log(result);

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
