import { ICollegeRepository } from "../../../contracts";
import { CollegeDto } from "../../../../application/dtos/college-dto";
import Mapper from "@/application/mappers";
import { Result } from "../../../../core/domain/result";

export class DeleteCollegeUseCase {
  constructor(private collegeRepository: ICollegeRepository) {}

  async execute(id: string): Promise<Result<CollegeDto>> {
    const result = await this.collegeRepository.delete(id);

    const collegeDto = await Mapper.map<CollegeDto>(result, CollegeDto);

    return new Result<CollegeDto>(
      collegeDto,
      "Universidade deletada com sucesso."
    );
  }
}
