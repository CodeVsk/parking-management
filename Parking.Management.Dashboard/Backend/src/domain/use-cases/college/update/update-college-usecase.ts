import { CollegeRepository } from "../../../contracts";
import { CollegeDto } from "../../../../application/dtos/college-dto";
import { CollegeMapper } from "../../../../application/mappers/college-mapper";

export class UpdateCollegeUseCase {
  constructor(
    private collegeRepository: CollegeRepository,
    private collegeMapper: CollegeMapper
  ) {}

  async execute(data: CollegeDto): Promise<CollegeDto> {
    const college = await this.collegeRepository.findById(data.id);

    const collegeModel = {
      ...college,
      ...data,
    };

    const result = await this.collegeRepository.update(collegeModel);

    const collegeDto = this.collegeMapper.mapper(result);

    return collegeDto;
  }
}
