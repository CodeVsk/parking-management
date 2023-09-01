import { ICollegeRepository } from "../../../contracts";
import { CollegeDto } from "../../../../application/dtos/college-dto";
import { mapper } from "@/application/mappers/mapper-config";
import { Result } from "../../../../core/domain/result";
import { College } from "@/domain/entities";

export class CreateCollegeUseCase {
  constructor(private collegeRepository: ICollegeRepository) {}

  async execute(data: CollegeDto): Promise<Result<CollegeDto>> {
    const collegeModel = mapper.map(data, CollegeDto, College);

    const result = await this.collegeRepository.create(collegeModel);

    const collegeDto = mapper.map(result, College, CollegeDto);

    return new Result<CollegeDto>({
      content: collegeDto,
      message: "Universidade criada com sucesso.",
    });
  }
}
