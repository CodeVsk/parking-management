import { Request } from "express";
import { DeleteCollegeUseCase } from "./delete-college-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { CollegeDto } from "../../../../application/dtos/college-dto";

export class DeleteCollegeController {
  constructor(private deleteCollegeUseCase: DeleteCollegeUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params;

      const result = await this.deleteCollegeUseCase.execute(id);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
