import { CourseDto } from "../../../../application/dtos/course-dto";
import { CourseMapper } from "../../../../application/mappers/course-mapper";
import { PrismaCourseRepository } from "../../../../infra/repositories/prisma/course-repository";
import { UpdateCourseUseCase } from "./update-course-usecase";

describe("Create course usecase", () => {
  it("Should be able to create a new course", async () => {
    const mapper = new CourseMapper();
    const repository = new PrismaCourseRepository();
    const sut = new UpdateCourseUseCase(repository, mapper);

    const dataSource: CourseDto = {
      collegeId: "",
      name: "",
    };

    const response = sut.execute(dataSource);

    expect(response).toBeTruthy();
  });
});
