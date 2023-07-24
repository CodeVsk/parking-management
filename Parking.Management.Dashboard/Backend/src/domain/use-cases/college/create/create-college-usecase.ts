import { CollegeRepository } from "../../../contracts";
import { CollegeDto } from "../../../../application/dtos/college-dto";
import { CollegeMapper } from "../../../../application/mappers/college-mapper";

export class CreateCollegeUseCase {
  constructor(
    private collegeRepository: CollegeRepository,
    private collegeMapper: CollegeMapper
  ) {}

  async execute(data: CollegeDto): Promise<CollegeDto> {
    const collegeModel = this.collegeMapper.toEntitie(data);

    const result = await this.collegeRepository.create(collegeModel);

    const collegeDto = this.collegeMapper.toDto(result);

    return collegeDto;
  }
}