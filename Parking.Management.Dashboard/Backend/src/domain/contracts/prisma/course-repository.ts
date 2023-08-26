import { Course } from "../../entities";

export interface ICourseRepository {
  create(course: Course): Promise<Course>;
  update(course: Course): Promise<Course>;
  delete(id: string): Promise<Course>;
  findById(id: string): Promise<Course>;
}
