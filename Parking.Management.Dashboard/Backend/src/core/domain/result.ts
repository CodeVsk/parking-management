export class Result<T = any> {
  readonly content?: T;
  readonly message?: string;

  constructor(content?: T | any, message?: string) {
    this.content = content;
    this.message = message;
  }
}
