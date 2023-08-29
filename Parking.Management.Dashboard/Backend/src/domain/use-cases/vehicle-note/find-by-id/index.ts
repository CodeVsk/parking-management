import { PrismaVehicleNoteRepository } from "../../../../infra/repositories/prisma/vehicle-note-repository";

import { FindByIdVehicleNoteController } from "./find-by-id-vehicle-note-controller";
import { FindByIdVehicleNoteUseCase } from "./find-by-id-vehicle-note-usecase";

const repository = new PrismaVehicleNoteRepository();
const mapper = new VehicleNoteMapper();
const loader = new FindByIdVehicleNoteUseCase(repository, mapper);

const findByIdVehicleNoteController = new FindByIdVehicleNoteController(loader);

export { findByIdVehicleNoteController };
