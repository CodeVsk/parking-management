import { ICollegeRepository } from "../../../contracts";
import { CollegeDto } from "../../../../application/dtos/college-dto";
import { CollegeMapper } from "../../../../application/mappers/college-mapper";
import { Result } from "../../../../core/domain/result";

export class DeleteCollegeUseCase {
  constructor(
    private collegeRepository: ICollegeRepository,
    private collegeMapper: CollegeMapper
  ) {}

  async execute(id: string): Promise<Result<CollegeDto>> {
    const result = await this.collegeRepository.delete(id);

    const collegeDto = this.collegeMapper.mapper(result);

    return new Result<CollegeDto>(
      collegeDto,
      "Universidade deletada com sucesso."
    );
  }
}
