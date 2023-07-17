import { Request, Response, response } from 'express';
import { CreatePatrimonyService } from '../../services/patrimony/CreatePatrimonyService';

class CreatePatrimonyController {
  async handle(req: Request, res: Response) {
    //console.log(req.body);
    const { Name, Tombamento, Status, Detentor } = req.body;

    const createPatrimonyService = new CreatePatrimonyService();

    const patrimony = await createPatrimonyService.execute({
      Name,
      Tombamento,
      Status,
      Detentor
    });

    return res.json(patrimony)
  }
}

export { CreatePatrimonyController }