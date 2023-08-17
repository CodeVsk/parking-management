import { ICollegeRepository } from "../../../contracts";
import { CollegeDto } from "../../../../application/dtos/college-dto";
import { CollegeMapper } from "../../../../application/mappers/college-mapper";
import { Result } from "../../../../core/domain/result";

export class UpdateCollegeUseCase {
  constructor(
    private collegeRepository: ICollegeRepository,
    private collegeMapper: CollegeMapper
  ) {}

  async execute(data: CollegeDto): Promise<Result<CollegeDto>> {
    const college = await this.collegeRepository.findById(data.id);

    const collegeModel = {
      ...college,
      ...data,
    };

    const result = await this.collegeRepository.update(collegeModel);

    const collegeDto = this.collegeMapper.mapper(result);

    return new Result<CollegeDto>(
      collegeDto,
      "Universidade atualizada com sucesso."
    );
  }
}
