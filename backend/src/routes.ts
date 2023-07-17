import { Router } from 'express';
import { CreatePatrimonyController } from './controllers/patrimony/CreatePatrimonyController';

const router = Router();

// router.get('/teste', (req: Request, res: Response) => {
//   return res.json({ ok: true })
//   //throw new Error('Erro ao fazer essa requisição!');
// })

// -- Rotas Patrimonios --
router.post('/patrimonios', new CreatePatrimonyController().handle)

export { router };