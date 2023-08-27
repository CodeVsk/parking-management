import { ICollegeRepository } from "../../../contracts";
import { CollegeDto } from "../../../../application/dtos/college-dto";
import Mapper from "@/application/mappers";
import { Result } from "../../../../core/domain/result";

export class UpdateCollegeUseCase {
  constructor(private collegeRepository: ICollegeRepository) {}

  async execute(data: CollegeDto): Promise<Result<CollegeDto>> {
    const college = await this.collegeRepository.findById(data.id);

    const collegeModel = {
      ...college,
      ...data,
    };

    const result = await this.collegeRepository.update(collegeModel);

    const collegeDto = await Mapper.map<CollegeDto>(result, CollegeDto);

    return new Result<CollegeDto>(
      collegeDto,
      "Universidade atualizada com sucesso."
    );
  }
}
