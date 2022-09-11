import { Request, Response } from "express";
import { api } from "../../../configs/api";
import { SeniorService } from "./../../../services/senior/senior";
import { LoginUseCase } from "./use-cases/login-use-case";

export class SeniorController {
  static login(req: Request, res: Response) {
    const service = new SeniorService(api);
    const useCase = new LoginUseCase(service);

    const result = useCase.execute({
      user: req.body.user,
      password: req.body.password,
    });

    return res.json(result);
  }
}
