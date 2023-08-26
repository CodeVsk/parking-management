import { CollegeMapper } from "@/application/mappers/user-mapper";

export const mapper = new (class CreateMapper {
  createMapper() {
    new CollegeMapper();
  }
})();
