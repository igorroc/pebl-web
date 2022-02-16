import { Router } from 'express';
import { container } from 'tsyringe';
import PatientController from '../controllers/PatientController';

const patientRouter = Router();
const patientController = container.resolve(PatientController);

patientRouter.post('/create', patientController.create);
patientRouter.post('/cpf', patientController.searchCpf)

export default patientRouter;