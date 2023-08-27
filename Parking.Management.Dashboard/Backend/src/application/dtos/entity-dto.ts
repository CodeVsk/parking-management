import { AutoMap } from "@automapper/classes";

export abstract class EntityDto {
  @AutoMap()
  public id?: string;
}
