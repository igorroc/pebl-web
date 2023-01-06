import { DeleteResult, UpdateResult } from "typeorm";
import ICreatePatientDTO from "../dtos/ICreatePatientDtos";
import Patient from "../infra/typeorm/entities/Patients";

export interface IPatientService {
  execute(data: ICreatePatientDTO): Promise<Patient>;
  searchCpf(cpf: string): Promise<Patient>;
  update(id: string, patient: Patient): Promise<UpdateResult>;
  delete(id: string): Promise<DeleteResult>;
  listAll(): Promise<Patient[]>;
}
