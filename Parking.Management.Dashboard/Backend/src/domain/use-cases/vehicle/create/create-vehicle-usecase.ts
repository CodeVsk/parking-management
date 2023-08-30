import { IVehicleRepository } from "../../../contracts";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { Result } from "../../../../core/domain/result";
import { mapper } from "@/application/mappers/mapper-config";
import { Vehicle } from "@/domain/entities";

export class CreateVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute(data: VehicleDto): Promise<Result<VehicleDto>> {
    const vehicleModel = mapper.map(data, Vehicle);

    const result = await this.vehicleRepository.create(vehicleModel);

    const vehicleDto = mapper.map(result, Vehicle, VehicleDto);

    return new Result<VehicleDto>(
      vehicleDto,
      "Universidade criada com sucesso."
    );
  }
}
