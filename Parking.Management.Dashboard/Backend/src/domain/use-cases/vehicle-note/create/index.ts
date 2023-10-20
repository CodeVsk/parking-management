import { PrismaVehicleNoteRepository } from "../../../../infra/repositories/prisma/vehicle-note-repository";

import { CreateVehicleNoteController } from "./create-vehicle-note-controller";
import { CreateVehicleNoteUseCase } from "./create-vehicle-note-usecase";

const repository = new PrismaVehicleNoteRepository();
const loader = new CreateVehicleNoteUseCase(repository);

const createVehicleNoteController = new CreateVehicleNoteController(loader);

export { createVehicleNoteController };
