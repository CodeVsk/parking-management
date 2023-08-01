import { VehicleNote } from "../../entities";

export interface VehicleNoteRepository {
  create(user: VehicleNote): Promise<VehicleNote>;
  update(user: VehicleNote): Promise<VehicleNote>;
  delete(id: string): Promise<VehicleNote>;
  findById(id: string): Promise<VehicleNote>;
}
