export class ApiError extends Error {
  public readonly statusCode: number;
  public readonly errors;

  constructor(message: string, statusCode: number, errors = []) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

export class UnauthorizedError extends ApiError {
  constructor() {
    const message = "Unauthorized access";
    const statusCode = 401;

    super(message, statusCode);
  }
}
