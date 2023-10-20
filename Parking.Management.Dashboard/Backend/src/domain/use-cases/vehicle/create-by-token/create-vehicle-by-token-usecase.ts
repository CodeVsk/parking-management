import { IUserRepository, IVehicleRepository } from "../../../contracts";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { Result } from "../../../../core/domain/result";
import { mapper } from "@/application/mappers/mapper-config";
import { Vehicle } from "@/domain/entities";

export class CreateVehicleByTokenUseCase {
  constructor(
    private vehicleRepository: IVehicleRepository,
    private userRepository: IUserRepository
  ) {}

  async execute(data: VehicleDto, userId: string): Promise<Result<VehicleDto>> {
    const userModel = await this.userRepository.findById(userId);

    data.userId = userId;
    data.collegeId = userModel.collegeId;

    const vehicleModel = mapper.map(data, VehicleDto, Vehicle);

    const result = await this.vehicleRepository.create(vehicleModel);

    const vehicleDto = mapper.map(result, Vehicle, VehicleDto);

    return new Result<VehicleDto>({
      content: vehicleDto,
      message: "Veiculo cadastrado com sucesso.",
    });
  }
}
