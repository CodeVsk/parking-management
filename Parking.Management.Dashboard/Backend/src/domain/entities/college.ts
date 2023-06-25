import { Entity } from "../../core/domain/entity";

type CollegeProps = {
  name: string;
  address: string;
  city: string;
  campus: string;
};

export class College extends Entity<CollegeProps> {}
