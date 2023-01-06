import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import { container } from 'tsyringe';

import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { isTokenAuthenticated } from '../middlewares/passportAuthentication';

const usersRouter = Router();
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
// const upload = multer(uploadConfig);


usersRouter.post('/create', usersController.create);
// usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), userAvatarController.update);
usersRouter.get('/list',isTokenAuthenticated, usersController.index);

usersRouter.post('/testando', (req, res) => {console.log(req.body)})

usersRouter.get("/findById", isTokenAuthenticated, usersController.findById);
usersRouter.put("/update/:id", isTokenAuthenticated, usersController.update);
usersRouter.delete("/delete/:id", isTokenAuthenticated, usersController.delete);

export default usersRouter;