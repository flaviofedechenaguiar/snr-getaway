import { SeniorService } from "../../../../services/senior/senior";
import { ErrorResponse } from "../../../../utils/error-response";

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
      throw new ErrorResponse(error.message, 403);
    }
  }
}
