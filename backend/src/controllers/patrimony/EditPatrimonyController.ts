import { Request, Response } from "express";
import { EditPatrimonyService } from "../../services/patrimony/EditPatrimonyService";

class EditPatrimonyController {
  async handle(req: Request, res: Response) {
    const { id, Name,Tombamento, Status, Detentor } = req.body;

    const editPatrimonyService = new EditPatrimonyService();
    const editPatrimony = await editPatrimonyService.execute({
      id,
      Name,
      Tombamento,
      Status,
      Detentor
    });

    return res.json(editPatrimony);
  }
}

export { EditPatrimonyController }