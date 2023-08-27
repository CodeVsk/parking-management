import { IVehicleRepository } from "../../../contracts";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { Result } from "../../../../core/domain/result";
import { mapper } from "@/application/mappers";
import { Vehicle } from "@/domain/entities";

export class DeleteVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute(id: string): Promise<Result<VehicleDto>> {
    const result = await this.vehicleRepository.delete(id);

    const vehicleDto = mapper.map(result, Vehicle, VehicleDto);

    return new Result<VehicleDto>(
      vehicleDto,
      "Universidade deletada com sucesso."
    );
  }
}
