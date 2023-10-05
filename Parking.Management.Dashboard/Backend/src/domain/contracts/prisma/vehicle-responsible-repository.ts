import { VehicleResponsible } from "../../entities";

export interface IVehicleResponsibleRepository {
  create(user: VehicleResponsible): Promise<VehicleResponsible>;
  update(user: VehicleResponsible): Promise<VehicleResponsible>;
  delete(id: string): Promise<VehicleResponsible>;
  findById(id: string): Promise<VehicleResponsible[]>;
  findByVehicleUserId(
    id: string,
    userId: string
  ): Promise<VehicleResponsible[]>;
}
