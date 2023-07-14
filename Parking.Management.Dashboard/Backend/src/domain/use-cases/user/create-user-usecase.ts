import { GenericRepository } from "../../contracts";

type CreateUserUseCaseRequest = {
  name: string;
  email: string;
  phone: string;
  address: string;
  rg: string;
  cpf: string;
  gender: string;
  course: string;
  enrollment: string;
  status: boolean;
  collegeId: string;
  birthdate: Date;
};

export class CreateUserUseCase {
  constructor(private genericRepository: GenericRepository) {}

  async execute({
    name,
    email,
    phone,
    address,
    rg,
    cpf,
    gender,
    course,
    enrollment,
    status,
    collegeId,
    birthdate,
  }: CreateUserUseCaseRequest): Promise<string> {
    //Promise<CreateUserUseCaseRequest>
    const userAlreadyExist = await this.genericRepository.findById(rg);

    if (userAlreadyExist) {
      return userAlreadyExist;
    }

    return null;
  }
}
