import { Request, Response } from "express";
import { api } from "@/configs/api";
import { SeniorService } from "@/services/senior/senior";
import { LoginUseCase } from "./use-case";

export class SeniorController {
  static async login(req: Request, res: Response) {
    const service = new SeniorService(api);
    const useCase = new LoginUseCase(service);

    const result = await useCase.execute({
      user: req.body.user,
      password: req.body.password,
    });

    return res.json(result);
  }
}
