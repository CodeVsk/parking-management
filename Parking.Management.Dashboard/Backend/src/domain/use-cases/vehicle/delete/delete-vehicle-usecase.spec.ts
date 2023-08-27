import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { DeleteVehicleUseCase } from "./delete-vehicle-usecase";

describe("Create vehicle usecase", () => {
  it("Should be able to create a new vehicle", async () => {
    const repository = new PrismaVehicleRepository();
    const sut = new DeleteVehicleUseCase(repository);

    const id: string = "123";

    const response = sut.execute(id);

    expect(response).toBeTruthy();
  });
});
