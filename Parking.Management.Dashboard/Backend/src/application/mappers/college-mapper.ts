import { CollegeDto } from "../dtos";
import { College } from "../../domain/entities";

export class CollegeMapper {
  mapper(data: College | CollegeDto): College | CollegeDto {
    const entitie: College | CollegeDto = {
      ...data,
    };

    return entitie;
  }
}
