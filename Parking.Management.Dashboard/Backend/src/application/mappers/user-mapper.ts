import { createMap } from "@automapper/core";
import { mapper } from ".";
import { College } from "@/domain/entities";
import { CollegeDto } from "../dtos";

export class CollegeMapper {
  constructor() {
    createMap(mapper, College, CollegeDto);
  }
}
