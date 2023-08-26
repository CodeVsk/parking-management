import { GarageDto } from "../../../../application/dtos/garage-dto";
import { PrismaGarageRepository } from "../../../../infra/repositories/prisma/garage-repository";
import { CreateGarageUseCase } from "./create-garage-usecase";

describe("Create garage usecase", () => {
  it("Should be able to create a new garage", async () => {
    const repository = new PrismaGarageRepository();
    const sut = new CreateGarageUseCase(repository);

    const dataSource: GarageDto = {
      collegeId: "",
      departureTime: null,
      entryTime: null,
      status: "INSIDE",
      userDepartureId: "",
      userEntryId: "",
      vehicleId: "",
    };

    const response = sut.execute(dataSource);

    expect(response).toBeTruthy();
  });
});
