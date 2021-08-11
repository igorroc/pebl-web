import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import TestsController from '../controllers/TestsController';

const testsRouter = Router();
const testsController = new TestsController();

testsRouter.use(ensureAuthenticated);
testsRouter.post('/bst', testsController.create_bst);
testsRouter.post('/sternberg', testsController.create_sternberg);
testsRouter.post('/show/bst', testsController.show);
testsRouter.get('/list/bst', testsController.index);

export default testsRouter;