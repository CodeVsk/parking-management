import { Garage } from "../../entities";

export interface IGarageRepository {
  create(college: Garage): Promise<Garage>;
  update(college: Garage): Promise<Garage>;
  delete(id: string): Promise<Garage>;
  findById(id: string): Promise<Garage>;
  getAll(): Promise<Garage[]>;
  countInside(): Promise<number>;
  getLatestUpdated(): Promise<Garage[]>;
}
