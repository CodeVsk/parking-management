import { PrismaVehicleNoteRepository } from "../../../../infra/repositories/prisma/vehicle-note-repository";

import { DeleteVehicleNoteController } from "./delete-vehicle-note-controller";
import { DeleteVehicleNoteUseCase } from "./DeleteVehicleNoteUseCase";

const repository = new PrismaVehicleNoteRepository();
const mapper = new VehicleNoteMapper();
const loader = new DeleteVehicleNoteUseCase(repository, mapper);

const deleteVehicleNoteController = new DeleteVehicleNoteController(loader);

export { deleteVehicleNoteController };
