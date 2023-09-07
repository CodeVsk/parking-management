import { IVehicleResponsibleRepository } from "../../../contracts";
import { Result } from "../../../../core/domain/result";
import { mapper } from "@/application/mappers";
import { VehicleResponsibleDto } from "@/application/dtos";
import { VehicleResponsible } from "@/domain/entities";

export class CreateVehicleResponsibleUseCase {
  constructor(
    private vehicleResponsibleRepository: IVehicleResponsibleRepository
  ) {}

  async execute(
    data: VehicleResponsibleDto
  ): Promise<Result<VehicleResponsibleDto>> {
    const vehicleResponsibleModel = mapper.map(
      data,
      VehicleResponsibleDto,
      VehicleResponsible
    );

    const result = await this.vehicleResponsibleRepository.create(
      vehicleResponsibleModel
    );

    const vehicleResponsibleDto = mapper.map(
      result,
      VehicleResponsible,
      VehicleResponsibleDto
    );

    return new Result<VehicleResponsibleDto>({
      content: vehicleResponsibleDto,
      message: "Responsavel pelo veiculo criado com sucesso.",
    });
  }
}
