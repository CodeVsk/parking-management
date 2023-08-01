import { VehicleResponsible } from "../../entities";

export interface VehicleResponsibleRepository {
  create(user: VehicleResponsible): Promise<VehicleResponsible>;
  update(user: VehicleResponsible): Promise<VehicleResponsible>;
  delete(id: string): Promise<VehicleResponsible>;
  findById(id: string): Promise<VehicleResponsible>;
}
