import { AxiosInstance } from "axios";
import { tokenMapper } from "./token-mapper";

export interface Login {
  user: string;
  password: string;
}

export class SeniorService {
  constructor(private api: AxiosInstance) {}

  async login({ user, password }: Login): Promise<string> {
    try {
      const response = await this.api.post(
        "auth/LoginServlet",
        new URLSearchParams({ user, password })
      );
      return tokenMapper(response.config.jar);
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
}
