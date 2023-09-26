import { IUserRepository } from "../../../contracts";
import { UserDto } from "../../../../application/dtos/user-dto";
import { Result } from "../../../../core/domain/result";
import { User } from "@/domain/entities";
import { mapper } from "@/application/mappers";
import { StatisticsUserDto } from "@/application/dtos/statistics-user-dto";

export class StatisticsUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<Result<StatisticsUserDto>> {
    const count = await this.userRepository.count();

    const date = new Date();

    const startDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    console.log(startDate, endDate);

    const thisMonth = await this.userRepository.countByDate(startDate, endDate);

    const statistics = new StatisticsUserDto();

    statistics.totalUsers = count;
    statistics.createdthisMonth = thisMonth;

    return new Result<StatisticsUserDto>({
      content: statistics,
      message: "Estatisticas encontradas.",
    });
  }
}
