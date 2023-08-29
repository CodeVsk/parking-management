import { CourseDto } from "../../../../application/dtos/course-dto";
import { mapper } from "@/application/mappers/mapper-config";
import { PrismaCourseRepository } from "../../../../infra/repositories/prisma/course-repository";
import { DeleteCourseUseCase } from "./delete-course-usecase";

describe("Create course usecase", () => {
  it("Should be able to create a new course", async () => {
    const repository = new PrismaCourseRepository();
    const sut = new DeleteCourseUseCase(repository);

    const id: string = "123";

    const response = sut.execute(id);

    expect(response).toBeTruthy();
  });
});
