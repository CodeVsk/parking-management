import { IVehicleResponsibleRepository } from "../../../contracts";
import { Result } from "../../../../core/domain/result";
import { VehicleResponsible } from "@/domain/entities";
import { VehicleResponsibleDto } from "@/application/dtos";
import { mapper } from "@/application/mappers";

export class DeleteVehicleResponsibleByTokenUseCase {
  constructor(
    private vehicleResponsibleRepository: IVehicleResponsibleRepository
  ) {}

  async execute(
    id: string,
    userId: string
  ): Promise<Result<VehicleResponsibleDto>> {
    const vehicleResponsible = this.vehicleResponsibleRepository.findByIdToken(
      id,
      userId
    );

    if (!vehicleResponsible) {
      return new Result<VehicleResponsibleDto>({
        message: "Responsável pelo veiculo não encontrado.",
      });
    }

    const result = await this.vehicleResponsibleRepository.delete(id);

    const vehicleResponsibleDto = mapper.map(
      result,
      VehicleResponsible,
      VehicleResponsibleDto
    );

    return new Result<VehicleResponsibleDto>({
      content: vehicleResponsibleDto,
      message: "Responsavel pelo veiculo deletado com sucesso.",
    });
  }
}
