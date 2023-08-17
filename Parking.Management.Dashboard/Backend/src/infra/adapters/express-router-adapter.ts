import { Request, Response } from "express";

export const adaptRoute = (controller: any) => {
  return async (request: Request, response: Response) => {
    const httpResponse = await controller.handle(request);
    response.status(httpResponse.statusCode).json(httpResponse);
  };
};
