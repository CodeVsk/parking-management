import { Vehicle } from "../../entities";

export interface IVehicleRepository {
  create(user: Vehicle): Promise<Vehicle>;
  update(user: Vehicle): Promise<Vehicle>;
  delete(id: string): Promise<Vehicle>;
  findById(id: string): Promise<Vehicle>;
  getAll(): Promise<Vehicle[]>;
  findByYear(year: number): Promise<Vehicle[]>;
}
