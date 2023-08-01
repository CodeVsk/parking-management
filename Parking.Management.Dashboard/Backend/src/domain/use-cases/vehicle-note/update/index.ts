import { PrismaVehicleNoteRepository } from "../../../../infra/repositories/prisma/vehicle-note-repository";
import { VehicleNoteMapper } from "../../../../application/mappers/vehicle-note-mapper";
import { UpdateVehicleNoteController } from "./update-vehicle-note-controller";
import { UpdateVehicleNoteUseCase } from "./update-vehicle-note-usecase";

const repository = new PrismaVehicleNoteRepository();
const mapper = new VehicleNoteMapper();
const loader = new UpdateVehicleNoteUseCase(repository, mapper);

const updateVehicleNoteController = new UpdateVehicleNoteController(loader);

export { updateVehicleNoteController };
