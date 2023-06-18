import { randomUUID } from "crypto";

export abstract class Entity<T> {
  protected _id: string;
  public props: T;

  constructor(props: T, id?: string) {
    this.props = props;

    // If the id property doesn't exist, a new one will be generated.
    this._id = id ?? randomUUID();
  }
}
