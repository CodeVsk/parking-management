import { ICollegeRepository } from "../../../contracts";
import { CollegeDto } from "../../../../application/dtos/college-dto";
import { Result } from "../../../../core/domain/result";
import { College } from "@/domain/entities";
import { mapper } from "@/application/mappers/mapper-config";

export class GetAllCollegeUseCase {
  constructor(private collegeRepository: ICollegeRepository) {}

  async execute(): Promise<Result<CollegeDto[]>> {
    const result = await this.collegeRepository.getAll();

    const collegesDto = await mapper.mapArrayAsync(result, College, CollegeDto);

    return new Result<CollegeDto[]>({
      content: collegesDto,
      message: "Universidade encontrada.",
    });
  }
}
