import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';

import { CreatePatrimonyController } from './controllers/patrimony/CreatePatrimonyController';
import { DetailPatrimonyController } from './controllers/patrimony/DetailPatrimonyController';

const router = Router();

// router.get('/teste', (req: Request, res: Response) => {
//   return res.json({ ok: true })
//   //throw new Error('Erro ao fazer essa requisição!');
// })

// -- Rotas usuarios --
router.post('/registerUsers', new CreateUserController().handle)

// -- Rotas Patrimonios --
router.post('/registerPatrimony', new CreatePatrimonyController().handle)
router.get('/detailPatrimony', new DetailPatrimonyController().handle)

export { router };