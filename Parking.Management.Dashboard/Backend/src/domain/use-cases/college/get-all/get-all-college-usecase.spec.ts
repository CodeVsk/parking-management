import { PrismaCollegeRepository } from "../../../../infra/repositories/prisma/college-repository";
import { GetAllCollegeUseCase } from "./get-all-college-usecase";

describe("Create college usecase", () => {
  it("Should be able to create a new college", async () => {
    const repository = new PrismaCollegeRepository();
    const sut = new GetAllCollegeUseCase(repository);

    const response = sut.execute();

    expect(response).toBeTruthy();
  });
});
