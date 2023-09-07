import { ICollegeRepository } from "../../../contracts";
import { CollegeDto } from "../../../../application/dtos/college-dto";
import { mapper } from "@/application/mappers/mapper-config";
import { Result } from "../../../../core/domain/result";
import { College } from "@/domain/entities";

export class UpdateCollegeUseCase {
  constructor(private collegeRepository: ICollegeRepository) {}

  async execute(data: CollegeDto): Promise<Result<CollegeDto>> {
    const college = await this.collegeRepository.findById(data.id);

    if (!college) {
      return new Result<CollegeDto>({
        message: "Universidade não encontrada.",
      });
    }

    const collegeModel = {
      ...college,
      ...data,
    };

    const result = await this.collegeRepository.update(collegeModel);

    const collegeDto = mapper.map(result, College, CollegeDto);

    return new Result<CollegeDto>({
      content: collegeDto,
      message: "Universidade atualizada com sucesso.",
    });
  }
}
