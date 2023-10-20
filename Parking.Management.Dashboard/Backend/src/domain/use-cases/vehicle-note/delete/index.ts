import { PrismaVehicleNoteRepository } from "../../../../infra/repositories/prisma/vehicle-note-repository";
import { DeleteVehicleNoteController } from "./delete-vehicle-note-controller";
import { DeleteVehicleNoteUseCase } from "./delete-vehicle-note-usecase";

const repository = new PrismaVehicleNoteRepository();
const loader = new DeleteVehicleNoteUseCase(repository);

const deleteVehicleNoteController = new DeleteVehicleNoteController(loader);

export { deleteVehicleNoteController };
