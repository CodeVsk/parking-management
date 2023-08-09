import { Vehicle } from "../../entities";

export interface VehicleRepository {
  create(user: Vehicle): Promise<Vehicle>;
  update(user: Vehicle): Promise<Vehicle>;
  delete(id: string): Promise<Vehicle>;
  findById(id: string): Promise<Vehicle>;
}