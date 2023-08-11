export class Result<T> {
  readonly content?: T;
  readonly message?: string;

  constructor(content?: T | null, message?: string) {
    this.content = content;
    this.message = message;
  }
}
