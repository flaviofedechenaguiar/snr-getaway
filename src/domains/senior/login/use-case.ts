import { SeniorService } from "../../../services/senior/senior";
import { Result } from "../../../utils/result";

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
  }: LoginUseCaseRequest): Promise<Result<LoginUseCaseResponse>> {
    try {
      const token = await this.service.login({ user, password });
      return Result.ok({ token });
    } catch (error) {
      return Result.fail({ message: error.message }, 401);
    }
  }
}
