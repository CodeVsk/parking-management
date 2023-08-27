import {
  CollegeMapper,
  CourseMapper,
  GarageMapper,
  UserMapper,
  VehicleMapper,
  VehicleNoteMapper,
  VehicleResponsibleMapper,
} from "@/application/mappers";

export const mapper = new (class CreateMapper {
  createMapper() {
    new CollegeMapper();
    new CourseMapper();
    new GarageMapper();
    new UserMapper();
    new VehicleMapper();
    new VehicleNoteMapper();
    new VehicleResponsibleMapper();
  }
})();
