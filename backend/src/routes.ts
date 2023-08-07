import { Router } from 'express';

// importações usuario
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

// importações patrimonio
import { CreatePatrimonyController } from './controllers/patrimony/CreatePatrimonyController';
import { DetailPatrimonyController } from './controllers/patrimony/DetailPatrimonyController';
import { ListPatrimonyController } from './controllers/patrimony/ListPatrimonyController';

// middleware
import { isAuthenticated } from './middlewares/isAuthenticated';


const router = Router();

// router.get('/teste', (req: Request, res: Response) => {
//   return res.json({ ok: true })
//   //throw new Error('Erro ao fazer essa requisição!');
// })

// -- Rotas usuarios --
router.post('/registerUsers', new CreateUserController().handle) // Rota de cadastro de usuário
router.post('/session', new AuthUserController().handle) // Rota de login de login no sistema
router.get('/detailUser', isAuthenticated, new DetailUserController().handle)

// -- Rotas Patrimonios --
router.post('/registerPatrimony', new CreatePatrimonyController().handle) // Rota de cadastro de patrimônio
router.get('/detailPatrimony', new DetailPatrimonyController().handle) // Rota de detalhes do patrimônio
router.get('/listPatrimony', isAuthenticated, new ListPatrimonyController().handle) // Rota de listar patrimônios

export { router };

/**
 * Rota do tipo get é usada, entre outras coisas, para buscar informações.
 * 
 * 
 */