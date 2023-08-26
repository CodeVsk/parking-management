import { CollegeDto } from "../../../../application/dtos/college-dto";
import { PrismaCollegeRepository } from "../../../../infra/repositories/prisma/college-repository";
import { UpdateCollegeUseCase } from "./update-college-usecase";

describe("Create college usecase", () => {
  it("Should be able to create a new college", async () => {
    const repository = new PrismaCollegeRepository();
    const sut = new UpdateCollegeUseCase(repository);

    const dataSource: CollegeDto = {
      address: "Test street",
      campus: "Test campus",
      city: "Test city",
      name: "Test name",
    };

    const response = sut.execute(dataSource);

    expect(response).toBeTruthy();
  });
});
