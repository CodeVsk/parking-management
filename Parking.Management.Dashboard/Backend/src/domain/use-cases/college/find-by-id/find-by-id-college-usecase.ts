import { ICollegeRepository } from "../../../contracts";
import { CollegeDto } from "../../../../application/dtos/college-dto";
import { Result } from "../../../../core/domain/result";
import { College } from "@/domain/entities";
import { mapper } from "@/application/mappers/mapper-config";

export class FindByIdCollegeUseCase {
  constructor(private collegeRepository: ICollegeRepository) {}

  async execute(id: string): Promise<Result<CollegeDto>> {
    const result = await this.collegeRepository.findById(id);

    const collegeDto = mapper.map(result, College, CollegeDto);
    //const collegeDto = mapper.map(result, College, CollegeDto);;

    return new Result<CollegeDto>(collegeDto, "Universidade encontrada.");
  }
}
