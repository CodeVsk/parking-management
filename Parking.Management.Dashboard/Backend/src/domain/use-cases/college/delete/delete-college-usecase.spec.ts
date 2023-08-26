import { PrismaCollegeRepository } from "../../../../infra/repositories/prisma/college-repository";
import { DeleteCollegeUseCase } from "./delete-college-usecase";

describe("Create college usecase", () => {
  it("Should be able to create a new college", async () => {
    const repository = new PrismaCollegeRepository();
    const sut = new DeleteCollegeUseCase(repository);

    const id: string = "123";

    const response = sut.execute(id);

    expect(response).toBeTruthy();
  });
});
