import { Request } from "express";
import { FindByEnrollmentUserUseCase } from "./find-by-enrollment-user-usecase";
import { HttpResponse } from "@/presentation/helpers/http";

export class FindByEnrollmentUserController {
  constructor(
    private findByEnrollmentUserUseCase: FindByEnrollmentUserUseCase
  ) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const { enrollment } = request.params;

      const result = await this.findByEnrollmentUserUseCase.execute(enrollment);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
