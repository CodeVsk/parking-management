import { ICollegeRepository } from "../../../contracts";
import { CollegeDto } from "../../../../application/dtos/college-dto";
import { mapper } from "@/application/mappers/mapper-config";
import { Result } from "../../../../core/domain/result";
import { College } from "@/domain/entities";

export class DeleteCollegeUseCase {
  constructor(private collegeRepository: ICollegeRepository) {}

  async execute(id: string): Promise<Result<CollegeDto>> {
    const college = await this.collegeRepository.findById(id);

    if (!college) {
      return new Result<CollegeDto>({
        message: "Universidade não encontrada.",
      });
    }

    const result = await this.collegeRepository.delete(id);

    const collegeDto = mapper.map(result, College, CollegeDto);

    return new Result<CollegeDto>({
      content: collegeDto,
      message: "Universidade deletada com sucesso.",
    });
  }
}
