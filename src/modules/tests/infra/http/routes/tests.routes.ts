import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import TestsController from '../controllers/TestsController';
import { isTokenAuthenticated } from '@modules/users/infra/http/middlewares/passportAuthentication';

const testsRouter = Router();
const testsController = new TestsController();

// testsRouter.use(ensureAuthenticated);
//testsRouter.use(isTokenAuthenticated);

testsRouter.post('/bst', isTokenAuthenticated, testsController.create_bst);
testsRouter.post('/sternberg', isTokenAuthenticated, testsController.create_sternberg);
testsRouter.post('/tol', isTokenAuthenticated, testsController.create_tol);
testsRouter.post('/stroop', isTokenAuthenticated, testsController.create_stroop);
testsRouter.post('/show/bst', testsController.show_userbst);
testsRouter.get('/list/bst', testsController.index_bst);
testsRouter.post('/show/sternberg', testsController.show_usersternberg);
testsRouter.get('/list/sternberg', testsController.index_sternberg);
testsRouter.post('/show/tol', testsController.show_usertol);
testsRouter.get('/list/tol', testsController.index_tol);
testsRouter.post('/show/stroop', testsController.show_userstroop);
testsRouter.get('/list/stroop', testsController.index_stroop);

export default testsRouter;
