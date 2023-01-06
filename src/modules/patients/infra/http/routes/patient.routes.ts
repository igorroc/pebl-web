import { isTokenAuthenticated } from "@modules/users/infra/http/middlewares/passportAuthentication";
import { Router } from "express";
import { container } from "tsyringe";
import PatientController from "../controllers/PatientController";

const patientRouter = Router();
const patientController = container.resolve(PatientController);

patientRouter.get("/all",isTokenAuthenticated, patientController.listAll);
patientRouter.post("/create",isTokenAuthenticated, patientController.create);
patientRouter.post("/cpf",isTokenAuthenticated, patientController.searchCpf);
patientRouter.get("/:id", isTokenAuthenticated,patientController.searchId);
patientRouter.put("/update/:id",isTokenAuthenticated, patientController.update);
patientRouter.delete("/delete/:id",isTokenAuthenticated, patientController.delete);
export default patientRouter;
