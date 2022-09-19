interface IError {
  message: string;
}

export class Result<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  public code: number;
  public error: IError;
  private _value: T;

  private constructor(isSuccess: boolean, error?: IError, code = 0, value?: T) {
    if (isSuccess && error) {
      throw new Error(`InvalidOperation: A result cannot be 
        successful and contain an error`);
    }
    if (!isSuccess && !error) {
      throw new Error(`InvalidOperation: A failing result 
        needs to contain an error message`);
    }

    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.error = error;
    this.code = code;
    this._value = value;

    Object.freeze(this);
  }

  public getValue(): T {
    if (!this.isSuccess) {
      throw new Error(`Cant retrieve the value from a failed result.`);
    }

    return this._value;
  }

  public static ok<U>(value?: U, code = 0): Result<U> {
    return new Result<U>(true, null, code, value);
  }

  public static fail<U>(error: IError, code = 0): Result<U> {
    return new Result<U>(false, error, code);
  }
}
