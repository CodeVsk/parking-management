import { createMap } from "@automapper/core";
import { mapper } from "./mapper-config";
import { College } from "@/domain/entities";
import { CollegeDto } from "../dtos";

export class CollegeMapper {
  constructor() {
    createMap(mapper, College, CollegeDto);
  }
}
