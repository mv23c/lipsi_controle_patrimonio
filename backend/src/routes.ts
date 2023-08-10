import { Router } from 'express';

// importações usuario
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

// importações patrimonio
import { CreatePatrimonyController } from './controllers/patrimony/CreatePatrimonyController';
import { DetailPatrimonyController } from './controllers/patrimony/DetailPatrimonyController';
import { ListPatrimonyController } from './controllers/patrimony/ListPatrimonyController';
import { EditPatrimonyController } from './controllers/patrimony/EditPatrimonyController';
import { RemovePatrimonyController } from './controllers/patrimony/RemovepatrimonyController';

// middleware
import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

// router.get('/teste', (req: Request, res: Response) => {
//   return res.json({ ok: true })
//   //throw new Error('Erro ao fazer essa requisição!');
// })

// -- Rotas Usuários --
router.post('/registerUsers', new CreateUserController().handle) // Rota de cadastro de usuário
router.post('/session', new AuthUserController().handle) // Rota de login de login no sistema
router.get('/detailUser', isAuthenticated, new DetailUserController().handle)

// -- Rotas Patrimônios --
router.post('/registerPatrimony', isAuthenticated, new CreatePatrimonyController().handle) // Rota de cadastro de patrimônio
router.get('/detailPatrimony', isAuthenticated, new DetailPatrimonyController().handle) // Rota de detalhes do patrimônio
router.get('/listPatrimony', isAuthenticated, new ListPatrimonyController().handle) // Rota de listar patrimônios
router.put('/updatePatrimony', isAuthenticated, new EditPatrimonyController().handle) // Rota de editar patrimônio
router.delete('/PatrimonyDelete', isAuthenticated, new RemovePatrimonyController().handle)
 // Rota de deletar patrimônio
export { router };

/**
 * Rota do tipo get é usada, entre outras coisas, para buscar informações.
 */