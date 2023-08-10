import { Request, Response } from "express";
import { DetailPatrimonyService } from "../../services/patrimony/DetailPatrimonyService";

class DetailPatrimonyController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;

    const detailPatrimonyService = new DetailPatrimonyService();

    const patrimony = await detailPatrimonyService.execute({ id });

    return res.json(patrimony);
  }
}

export { DetailPatrimonyController }