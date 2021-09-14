import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import TestsController from '../controllers/TestsController';

const testsRouter = Router();
const testsController = new TestsController();

// testsRouter.use(ensureAuthenticated);
testsRouter.post('/bst', testsController.create_bst);
testsRouter.post('/sternberg', testsController.create_sternberg);
testsRouter.post('/tol', testsController.create_tol);
testsRouter.post('/stroop', testsController.create_stroop);
testsRouter.post('/show/bst', testsController.show_userbst);
testsRouter.get('/list/bst', testsController.index_bst);
testsRouter.post('/show/sternberg', testsController.show_usersternberg);
testsRouter.get('/list/sternberg', testsController.index_sternberg);
testsRouter.post('/show/tol', testsController.show_usertol);
testsRouter.get('/list/tol', testsController.index_tol);
testsRouter.post('/show/stroop', testsController.show_userstroop);
testsRouter.get('/list/stroop', testsController.index_stroop);

export default testsRouter;