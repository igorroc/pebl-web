import { Router } from 'express';

import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const passwordRouter = Router();

const sendForgotPasswordController = new ForgotPasswordController();
const resetForgotPasswordController = new ResetPasswordController();

passwordRouter.post('/forgot', sendForgotPasswordController.create);
passwordRouter.post('/reset', resetForgotPasswordController.create);

export default passwordRouter;