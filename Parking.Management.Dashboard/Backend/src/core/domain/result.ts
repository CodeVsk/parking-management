type ResultPayload<T> = {
  content?: T;
  message?: string;
};

export class Result<T = any> {
  public content?: T;
  public message?: string;

  constructor(data: ResultPayload<T>) {
    this.content = data.content || null;
    this.message = data.message || null;
  }
}
