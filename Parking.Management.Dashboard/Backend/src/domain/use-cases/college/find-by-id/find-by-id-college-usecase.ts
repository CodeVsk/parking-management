import { ICollegeRepository } from "../../../contracts";
import { CollegeDto } from "../../../../application/dtos/college-dto";
import { CollegeMapper } from "../../../../application/mappers/college-mapper";
import { Result } from "../../../../core/domain/result";

export class FindByIdCollegeUseCase {
  constructor(
    private collegeRepository: ICollegeRepository,
    private collegeMapper: CollegeMapper
  ) {}

  async execute(id: string): Promise<Result<CollegeDto>> {
    const result = await this.collegeRepository.findById(id);

    const collegeDto = this.collegeMapper.mapper(result);

    return new Result<CollegeDto>(collegeDto, "Universidade encontrada.");
  }
}
