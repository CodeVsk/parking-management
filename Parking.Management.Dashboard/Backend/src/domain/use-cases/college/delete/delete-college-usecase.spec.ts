import { CollegeDto } from "../../../../application/dtos/college-dto";
import { CollegeMapper } from "../../../../application/mappers/college-mapper";
import { PrismaCollegeRepository } from "../../../../infra/repositories/prisma/college-repository";
import { DeleteCollegeUseCase } from "./delete-college-usecase";

describe("Create college usecase", () => {
  it("Should be able to create a new college", async () => {
    const mapper = new CollegeMapper();
    const repository = new PrismaCollegeRepository();
    const sut = new DeleteCollegeUseCase(repository, mapper);

    const id: string = "123";

    const response = sut.execute(id);

    expect(response).toBeTruthy();
  });
});
