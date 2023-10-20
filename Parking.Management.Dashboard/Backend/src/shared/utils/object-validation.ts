import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

export async function objectValidation(
  from: any,
  to: any
): Promise<string[] | boolean> {
  const instance = plainToInstance(to, from);
  const errors = await validate(instance);

  if (errors.length > 0) {
    const errorMessages = errors.map(
      (error) => Object.values(error.constraints)[0]
    );

    return errorMessages;
  }

  return false;
}
