import { UnauthorizedError } from "@/helpers/api-errors";
import { SeniorService } from "@/services/senior/senior";

interface LoginUseCaseRequest {
  user: string;
  password: string;
}

interface LoginUseCaseResponse {
  token: string;
}

export class LoginUseCase {
  constructor(private service: SeniorService) {}

  async execute({
    user,
    password,
  }: LoginUseCaseRequest): Promise<LoginUseCaseResponse> {
    try {
      const token = await this.service.login({ user, password });
      return { token };
    } catch (error) {
      throw new UnauthorizedError();
    }
  }
}
