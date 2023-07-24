import { College } from "../../entities";

export interface CollegeRepository {
  create(college: College): Promise<College>;
}
