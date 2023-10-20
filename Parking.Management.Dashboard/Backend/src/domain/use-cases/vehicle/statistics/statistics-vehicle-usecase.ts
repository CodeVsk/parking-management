import { IVehicleRepository } from "../../../contracts";
import { Result } from "../../../../core/domain/result";
import { StatisticsVehicleDto } from "@/application/dtos";
import { Months } from "@/domain/enums";

export class StatisticsVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute(): Promise<Result<StatisticsVehicleDto[]>> {
    const year = new Date().getFullYear();
    const data: StatisticsVehicleDto[] = [];

    const result = await this.vehicleRepository.findByYear(year);

    Object.keys(Months).forEach((key, index) => {
      data.push({
        name: Months[index],
        value: result.filter((x) => x.created_at.getMonth() == index).length,
      });
    });

    return new Result<StatisticsVehicleDto[]>({
      content: data,
      message: "Estatisticas geradas.",
    });
  }
}
