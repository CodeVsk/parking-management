import { ICollegeRepository } from "../../../contracts";
import { CollegeDto } from "../../../../application/dtos/college-dto";
import Mapper from "@/application/mappers";
import { Result } from "../../../../core/domain/result";
import { College } from "@/domain/entities";

export class CreateCollegeUseCase {
  constructor(private collegeRepository: ICollegeRepository) {}

  async execute(data: CollegeDto): Promise<Result<CollegeDto>> {
    const collegeModel = await Mapper.map<College>(data, College);

    const result = await this.collegeRepository.create(collegeModel);

    const collegeDto = await Mapper.map<CollegeDto>(result, CollegeDto);

    return new Result<CollegeDto>(
      collegeDto,
      "Universidade criada com sucesso."
    );
  }
}
