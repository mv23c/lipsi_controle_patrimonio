import { Request, Response } from "express";
import { RemovePatrimonyService } from "../../services/patrimony/RemovePatrimonyService";

class RemovePatrimonyController {
  async handle(req: Request, res: Response) {
    const patrimony_id = req.query.patrimony_id as string;

    const removePatrimony = new RemovePatrimonyService();
    const patrimony = await removePatrimony.execute({
      patrimony_id
    });

    return res.json(patrimony);
  }
}

export { RemovePatrimonyController }