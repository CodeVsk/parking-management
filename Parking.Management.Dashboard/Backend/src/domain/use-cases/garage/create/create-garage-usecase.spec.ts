import { GarageDto } from "../../../../application/dtos/garage-dto";
import { GarageMapper } from "../../../../application/mappers/garage-mapper";
import { PrismaGarageRepository } from "../../../../infra/repositories/prisma/garage-repository";
import { CreateGarageUseCase } from "./create-garage-usecase";

describe("Create garage usecase", () => {
  it("Should be able to create a new garage", async () => {
    const mapper = new GarageMapper();
    const repository = new PrismaGarageRepository();
    const sut = new CreateGarageUseCase(repository, mapper);

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
