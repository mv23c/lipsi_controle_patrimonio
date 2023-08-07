import { Request, Response } from "express";
import { ListPatrimonyService } from "../../services/patrimony/ListPatrimonyService";

class ListPatrimonyController {
  async handle(req: Request, res: Response) {
    const listPatrimonyService = new ListPatrimonyService();

    const patrimony = await listPatrimonyService.execute();

    return res.json(patrimony);
  }
}

export { ListPatrimonyController }