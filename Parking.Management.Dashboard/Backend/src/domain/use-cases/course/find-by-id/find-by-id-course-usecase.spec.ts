import { CourseDto } from "../../../../application/dtos/course-dto";
import { CourseMapper } from "../../../../application/mappers/course-mapper";
import { PrismaCourseRepository } from "../../../../infra/repositories/prisma/course-repository";
import { FindByIdCourseUseCase } from "./find-by-id-course-usecase";

describe("Create course usecase", () => {
  it("Should be able to create a new course", async () => {
    const mapper = new CourseMapper();
    const repository = new PrismaCourseRepository();
    const sut = new FindByIdCourseUseCase(repository, mapper);

    const id: string = "123";

    const response = sut.execute(id);

    expect(response).toBeTruthy();
  });
});
