import { CollegeRepository } from "../../../contracts";
import { CollegeDto } from "../../../../application/dtos/college-dto";
import { CollegeMapper } from "../../../../application/mappers/college-mapper";

export class FindByIdCollegeUseCase {
  constructor(
    private collegeRepository: CollegeRepository,
    private collegeMapper: CollegeMapper
  ) {}

  async execute(id: string): Promise<CollegeDto> {
    const result = await this.collegeRepository.findById(id);

    const collegeDto = this.collegeMapper.mapper(result);

    return collegeDto;
  }
}
