import { PrismaVehicleNoteRepository } from "../../../../infra/repositories/prisma/vehicle-note-repository";
import { VehicleNoteMapper } from "../../../../application/mappers/vehicle-note-mapper";
import { DeleteVehicleNoteController } from "./delete-vehicle-note-controller";
import { DeleteVehicleNoteUseCase } from "./delete-vehicle-note-usecase";

const repository = new PrismaVehicleNoteRepository();
const mapper = new VehicleNoteMapper();
const loader = new DeleteVehicleNoteUseCase(repository, mapper);

const deleteVehicleNoteController = new DeleteVehicleNoteController(loader);

export { deleteVehicleNoteController };
