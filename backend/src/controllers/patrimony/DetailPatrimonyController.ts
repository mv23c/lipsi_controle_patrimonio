import { Request, Response } from "express";
import { DetailPatrimonyService } from "../../services/patrimony/DetailPatrimonyService";

class DetailPatrimonyController {
  async handle(req: Request, res: Response) {
    const detailPatrimonyService = new DetailPatrimonyService();

    const patrimony = await detailPatrimonyService.execute();

    return res.json(patrimony);

  }
}

export { DetailPatrimonyController }