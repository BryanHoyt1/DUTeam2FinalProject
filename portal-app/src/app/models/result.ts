export class Result<T> {
    _statusCode: number;
    _data?: T;
    _links?: object;
    _errors: string[];
  }