import { CollegeRepository } from "../../../contracts";
import { CollegeDto } from "../../../../application/dtos/college-dto";
import { CollegeMapper } from "../../../../application/mappers/college-mapper";

export class DeleteCollegeUseCase {
  constructor(
    private collegeRepository: CollegeRepository,
    private collegeMapper: CollegeMapper
  ) {}

  async execute(id: string): Promise<CollegeDto> {
    const result = await this.collegeRepository.delete(id);

    const collegeDto = this.collegeMapper.mapper(result);

    return collegeDto;
  }
}
