import { PrismaVehicleNoteRepository } from "../../../../infra/repositories/prisma/vehicle-note-repository";

import { CreateVehicleNoteController } from "./create-vehicle-note-controller";
import { CreateVehicleNoteUseCase } from "./create-vehicle-note-usecase";

const repository = new PrismaVehicleNoteRepository();
const mapper = new VehicleNoteMapper();
const loader = new CreateVehicleNoteUseCase(repository, mapper);

const createVehicleNoteController = new CreateVehicleNoteController(loader);

export { createVehicleNoteController };
