import { CourseDto } from "../../../../application/dtos/course-dto";
import { mapper } from "@/application/mappers/mapper-config";
import { PrismaCourseRepository } from "../../../../infra/repositories/prisma/course-repository";
import { UpdateCourseUseCase } from "./update-course-usecase";

describe("Create course usecase", () => {
  it("Should be able to create a new course", async () => {
    const repository = new PrismaCourseRepository();
    const sut = new UpdateCourseUseCase(repository);

    const dataSource: CourseDto = {
      collegeId: "",
      name: "",
    };

    const response = sut.execute(dataSource);

    expect(response).toBeTruthy();
  });
});
