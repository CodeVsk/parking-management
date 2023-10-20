type ResultPayload<T> = {
  content?: T;
  message?: string;
  type?: string;
};

export class Result<T = any> {
  public content?: T;
  public message?: string;
  public type?: string;

  constructor(data: ResultPayload<T>) {
    this.content = data.content;
    this.message = data.message || null;
    this.type = data.type || "success";
  }
}
