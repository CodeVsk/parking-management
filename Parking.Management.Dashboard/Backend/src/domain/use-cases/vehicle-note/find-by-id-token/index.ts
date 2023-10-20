import { AuthProvider } from "@/infra/providers";
import { PrismaVehicleNoteRepository } from "../../../../infra/repositories/prisma/vehicle-note-repository";
import { FindByIdTokenVehicleNoteController } from "./find-by-id-token-vehicle-note-controller";
import { FindByIdTokenVehicleNoteUseCase } from "./find-by-id-token-vehicle-note-usecase";

const repository = new PrismaVehicleNoteRepository();
const loader = new FindByIdTokenVehicleNoteUseCase(repository);
const provider = new AuthProvider();

const findByIdTokenVehicleNoteController =
  new FindByIdTokenVehicleNoteController(loader, provider);

export { findByIdTokenVehicleNoteController };
