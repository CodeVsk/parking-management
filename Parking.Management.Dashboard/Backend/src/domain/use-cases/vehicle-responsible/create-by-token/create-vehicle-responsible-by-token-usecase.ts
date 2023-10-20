import {
  IUserRepository,
  IVehicleRepository,
  IVehicleResponsibleRepository,
} from "../../../contracts";
import { Result } from "../../../../core/domain/result";
import { mapper } from "@/application/mappers";
import { VehicleResponsibleDto } from "@/application/dtos";
import { Vehicle, VehicleResponsible } from "@/domain/entities";
import { VehicleResponsibleUserDto } from "@/application/dtos/vehicle-responsible-user-dto";

export class CreateVehicleResponsibleByTokenUseCase {
  constructor(
    private vehicleResponsibleRepository: IVehicleResponsibleRepository,
    private vehicleRepository: IVehicleRepository,
    private userRepository: IUserRepository
  ) {}

  async execute(
    data: VehicleResponsibleUserDto,
    userId: string
  ): Promise<Result<VehicleResponsibleDto>> {
    const user = await this.userRepository.findByEnrollment(data.enrollment); //find by enrollment in frontend

    if (!user) {
      return new Result<VehicleResponsibleDto>({
        message: "A matricula inserida não pertence a nenhum usuário.",
        type: "error",
      });
    }

    const verify: Vehicle = await this.vehicleRepository.findById(
      data.vehicleId
    );

    if (verify.userId != userId) {
      return new Result<VehicleResponsibleDto>({
        message: "O veiculo não pertence ao seu usuário.",
        type: "error",
      });
    }

    if (verify.userId == user.id) {
      return new Result<VehicleResponsibleDto>({
        message: "Este veiculo já pertence a você.",
        type: "error",
      });
    }

    const vehicleResponsibleModel = new VehicleResponsible();
    vehicleResponsibleModel.userId = user.id;
    vehicleResponsibleModel.vehicleId = verify.id;

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
      message: "Responsavel pelo veiculo adicionado com sucesso.",
    });
  }
}
