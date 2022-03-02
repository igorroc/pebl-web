import { Router } from "express";
import { container } from "tsyringe";
import PatientController from "../controllers/PatientController";

const patientRouter = Router();
const patientController = container.resolve(PatientController);

patientRouter.get("/all", patientController.listAll);
patientRouter.post("/create", patientController.create);
patientRouter.post("/cpf", patientController.searchCpf);
patientRouter.get("/:id", patientController.searchId);
patientRouter.put("/update/:id", patientController.update);
patientRouter.delete("/delete/:id", patientController.delete);
export default patientRouter;
