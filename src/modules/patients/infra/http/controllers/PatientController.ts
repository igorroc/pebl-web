import PatientService from "@modules/patients/services/PatientService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class PatientController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const patient = request.body;

      const createpatient = container.resolve(PatientService);

      const patientDb = await createpatient.execute(patient);

      // response.cookie("patientId", patientDb.id, {
      //   expires: new Date(Date.now() + 2 * 3600000),
      //   httpOnly: true,
      //   sameSite: "none",
      //   secure: true,
      //   path: "/",
      // });

      response.setHeader("Set-Cookie", [`patientId=${patientDb.id};Path=/`]);
      //  console.log(response.getHeaders());

      return response.json(patientDb);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }

  public async searchCpf(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { cpf } = request.body;
      const createpatient = container.resolve(PatientService);

      const patientDb = await createpatient.searchCpf(cpf);

      // response.cookie("patientId", patientDb.id, {
      //   expires: new Date(Date.now() + 2 * 3600000),
      //   httpOnly: true,
      //   sameSite: "none",
      //   secure: true,
      //   path: "/",
      // });

      response.setHeader("Set-Cookie", [`patientId=${patientDb.id};Path=/`]);
      console.log(request.headers.cookie);

      return response.json(patientDb);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }

  public async searchId(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { id } = request.params;
      console.log(id);
      const createpatient = container.resolve(PatientService);

      const patientDb = await createpatient.searchId(id);

      return response.json(patientDb);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const patient = request.body;
      const { id } = request.params;
      const updatePatient = container.resolve(PatientService);

      const patientDb = await updatePatient.update(id, patient);

      return response.json(patientDb);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const deletePatient = container.resolve(PatientService);

      const patientDb = await deletePatient.delete(id);

      return response.json(patientDb);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }

  public async listAll(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const listPatients = container.resolve(PatientService);
      const patientDb = await listPatients.listAll();
      return response.json(patientDb);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}
