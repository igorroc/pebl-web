import ICreatePatientDTO from "@modules/patients/dtos/ICreatePatientDtos";
import Patient from "@modules/patients/infra/typeorm/entities/Patients";
import { DeleteResult, UpdateResult } from "typeorm";

export default interface IPatientRepository {
  findById(id: string): Promise<Patient | undefined>;
  findByCPF(cpf: string): Promise<Patient | undefined>;
  create(data: ICreatePatientDTO): Promise<Patient>;
  update(id: string, data: ICreatePatientDTO): Promise<UpdateResult>;
  delete(id: string): Promise<DeleteResult>;
  listAll(): Promise<Patient[]>;
}
