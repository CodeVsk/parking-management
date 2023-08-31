export class Result<T = any> {
  private resultaType: T;
  public content?: T;
  public message?: string;

  constructor(content?: T, message?: string) {
    this.content = content;
    this.message = message;
  }
}
