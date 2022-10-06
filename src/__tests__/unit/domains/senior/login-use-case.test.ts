import { LoginUseCase } from "@/domains/senior/login/use-case";
import { UnauthorizedError } from "@/helpers/api-errors";
import { getError } from "@/helpers/test/no-error-thrown-error";
import { SeniorService } from "@/services/senior/senior";
import axios from "axios";

const stubAxios = axios.create();

const factory = {
  seniorService: new SeniorService(stubAxios),
};
const sut = new LoginUseCase(factory.seniorService);

const spySeniorServiceLogin = jest.spyOn(factory.seniorService, "login");

describe("LoginUserCase", () => {
  it("Should return token", async () => {
    spySeniorServiceLogin.mockResolvedValue("any_token");
    const result = await sut.execute({ user: "teste", password: "teste" });
    expect(result).toEqual({ token: "any_token" });
  });

  it("Should throw error", async () => {
    spySeniorServiceLogin.mockRejectedValue(new Error());

    const error = await getError(
      async () => await sut.execute({ user: "teste", password: "teste" })
    );

    expect(error).toBeInstanceOf(UnauthorizedError);
  });
});
