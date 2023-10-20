import { PrismaVehicleNoteRepository } from "../../../../infra/repositories/prisma/vehicle-note-repository";
import { UpdateVehicleNoteController } from "./update-vehicle-note-controller";
import { UpdateVehicleNoteUseCase } from "./update-vehicle-note-usecase";

const repository = new PrismaVehicleNoteRepository();
const loader = new UpdateVehicleNoteUseCase(repository);

const updateVehicleNoteController = new UpdateVehicleNoteController(loader);

export { updateVehicleNoteController };
