import { plainToInstance } from "class-transformer";
import { ValidationError, validate } from "class-validator";

export async function ObjectValidation(from: any, to: any): Promise<string[]> {
  const instance = plainToInstance(to, from);
  const errors =  await validate(instance): Promise<ValidationError[]>;

  if (errors.length > 0) {
    const errorMessages = errors.map((error) => Object.values(error.constraints));

    return errorMessages;
  }

  return true;
}
