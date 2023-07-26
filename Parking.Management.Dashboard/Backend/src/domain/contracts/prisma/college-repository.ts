import { College } from "../../entities";

export interface CollegeRepository {
  create(college: College): Promise<College>;
  update(college: College): Promise<College>;
  delete(id: string): Promise<College>;
  findById(id: string): Promise<College>;
}
