import { CourseDto } from "../../../../application/dtos/course-dto";
import { mapper } from "@/application/mappers/mapper-config";
import { PrismaCourseRepository } from "../../../../infra/repositories/prisma/course-repository";
import { GetAllCourseUseCase } from "./get-all-course-usecase";

describe("Create course usecase", () => {
  it("Should be able to create a new course", async () => {
    const repository = new PrismaCourseRepository();
    const sut = new GetAllCourseUseCase(repository);

    const response = sut.execute();

    expect(response).toBeTruthy();
  });
});
