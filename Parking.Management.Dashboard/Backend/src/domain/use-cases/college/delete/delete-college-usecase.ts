import { ICollegeRepository } from "../../../contracts";
import { CollegeDto } from "../../../../application/dtos/college-dto";
import { mapper } from "@/application/mappers/mapper-config";
import { Result } from "../../../../core/domain/result";

export class DeleteCollegeUseCase {
  constructor(private collegeRepository: ICollegeRepository) {}

  async execute(id: string): Promise<Result<CollegeDto>> {
    const result = await this.collegeRepository.delete(id);

    const collegeDto = mapper.map(result, College, CollegeDto);

    return new Result<CollegeDto>(
      collegeDto,
      "Universidade deletada com sucesso."
    );
  }
}
