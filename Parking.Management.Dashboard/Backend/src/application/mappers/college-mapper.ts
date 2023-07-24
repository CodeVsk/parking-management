import { CollegeDto } from "../dtos/college-dto";
import { College } from "../../domain/entities";

export class CollegeMapper {
  toEntitie(data: CollegeDto): College {
    const entitie: College = {
      ...data,
    };

    return entitie;
  }

  toDto(data: College): CollegeDto {
    const dto: CollegeDto = {
      ...data,
    };

    return dto;
  }
}
