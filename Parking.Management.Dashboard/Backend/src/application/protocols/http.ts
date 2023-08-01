import { Result } from "../../core/domain/result";

export type HttpResponse<T = any> = {
  statusCode: number;
  data?: T;
  message?: string;
};

export const unauthorized = (message: string): HttpResponse => ({
  statusCode: 401,
  message: message,
});

export const error = (error: Error): HttpResponse => ({
  statusCode: 500,
  message: error.stack,
});

export const ok = (result: Result<any>): HttpResponse => ({
  statusCode: 200,
  data: result.content,
  message: result.message,
});
