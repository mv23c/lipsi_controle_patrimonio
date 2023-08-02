import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';

import { CreatePatrimonyController } from './controllers/patrimony/CreatePatrimonyController';
import { DetailPatrimonyController } from './controllers/patrimony/DetailPatrimonyController';
import { AuthUserController } from './controllers/user/AuthUserController';

const router = Router();

// router.get('/teste', (req: Request, res: Response) => {
//   return res.json({ ok: true })
//   //throw new Error('Erro ao fazer essa requisição!');
// })

// -- Rotas usuarios --
router.post('/registerUsers', new CreateUserController().handle) // Rota de cadastro de usuário
router.post('/session', new AuthUserController().handle) // Rota de login de login no sistema

// -- Rotas Patrimonios --
router.post('/registerPatrimony', new CreatePatrimonyController().handle) // Rota de cadastro de patrimônio
router.get('/detailPatrimony', new DetailPatrimonyController().handle) // Rota de detalhes do patrimônio

export { router };