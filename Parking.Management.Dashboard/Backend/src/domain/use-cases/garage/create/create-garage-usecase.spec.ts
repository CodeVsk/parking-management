import { randomUUID } from "crypto";
import { GarageDto } from "../../../../application/dtos/garage-dto";
import { PrismaGarageRepository } from "../../../../infra/repositories/prisma/garage-repository";
import { CreateGarageUseCase } from "./create-garage-usecase";

describe("Create garage usecase", () => {
  it("Should be able to create a new garage", async () => {
    const repository = new PrismaGarageRepository();
    const sut = new CreateGarageUseCase(repository);

    const dataSource: GarageDto = {
      id: randomUUID(),
      collegeId: "86cd1946-ebd6-4ebb-b0c5-f3762e183f1a",
      departureTime: null,
      entryTime: new Date(),
      status: "INSIDE",
      userDepartureId: "",
      userEntryId: "e1fa99da-8928-4957-a55f-b169240b2886",
      vehicleId: "141d35fc-0d94-4352-ba2f-dd64b668e61f",
    };

    const response = await sut.execute(dataSource);

    expect(response).toBeTruthy();
  });
});
