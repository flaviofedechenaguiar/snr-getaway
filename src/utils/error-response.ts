export class ErrorResponse extends Error {
  constructor(message: string, private code: number) {
    super(message);
  }

  getCode() {
    return this.code;
  }
}
