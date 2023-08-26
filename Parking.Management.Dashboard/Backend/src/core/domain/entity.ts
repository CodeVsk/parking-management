import { AutoMap } from "@automapper/classes";
import { randomUUID } from "crypto";

export abstract class Entity {
  @AutoMap()
  id?: string;

  constructor(id?: string) {
    this.id = id ?? randomUUID();
  }
}
