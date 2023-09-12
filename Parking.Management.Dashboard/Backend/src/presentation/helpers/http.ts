import { Result } from "../../core/domain/result";
import { ServerError, UnauthorizedError } from "../errors";
import { ForbiddenError } from "../errors/forbidden-error";

export class HttpResponse {
  static ok(result: Result<any>) {
    return {
      statusCode: 200,
      data: result.content,
      message: result.message,
      type: result.type,
    };
  }

  static badRequest(error: Error) {
    return {
      statusCode: 400,
      message: error.message,
    };
  }

  static unauthorizedError() {
    return {
      statusCode: 401,
      message: new UnauthorizedError().message,
    };
  }

  static forbiddenRequest() {
    return {
      statusCode: 403,
      message: new ForbiddenError().message,
    };
  }

  static serverError() {
    return {
      statusCode: 500,
      message: new ServerError().message,
    };
  }
}
