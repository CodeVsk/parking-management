import { PrismaCollegeRepository } from "../../../../infra/repositories/prisma/college-repository";
import { FindByIdCollegeUseCase } from "./find-by-id-college-usecase";

describe("Create college usecase", () => {
  it("Should be able to create a new college", async () => {
    const repository = new PrismaCollegeRepository();
    const sut = new FindByIdCollegeUseCase(repository);

    const id: string = "123";

    const response = sut.execute(id);

    expect(response).toBeTruthy();
  });
});
