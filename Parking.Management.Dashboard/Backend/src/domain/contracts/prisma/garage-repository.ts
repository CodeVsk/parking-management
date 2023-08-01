import { Garage } from "../../entities";

export interface GarageRepository {
  create(college: Garage): Promise<Garage>;
  update(college: Garage): Promise<Garage>;
  delete(id: string): Promise<Garage>;
  findById(id: string): Promise<Garage>;
}
