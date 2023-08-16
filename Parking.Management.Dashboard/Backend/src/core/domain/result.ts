export class Result<T> {
  readonly content?: T;
  readonly message?: string;

  constructor(content?: T, message?: string) {
    this.content = content;
    this.message = message;
  }
}
