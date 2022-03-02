import { injectable, inject } from "tsyringe";
import { DeleteResult, UpdateResult } from "typeorm";
import ICreatePatientDtos from "../dtos/ICreatePatientDtos";
import Patient from "../infra/typeorm/entities/Patients";
import IPatientRepository from "../interfaces/IPatientRepository";
import { IPatientService } from "../interfaces/IPatientService";

@injectable()
class PatientService implements IPatientService {
  constructor(
    @inject("PatientRepository")
    private patientRepository: IPatientRepository
  ) {}

  async searchCpf(cpf: string): Promise<Patient> {
    const result = await this.patientRepository.findByCPF(cpf);
    return result;
  }

  async searchId(id: string): Promise<Patient> {
    const result = await this.patientRepository.findById(id);
    return result;
  }

  async listAll(): Promise<Patient[]> {
    const result = await this.patientRepository.listAll();
    return result;
  }

  async update(id: string, patient: Patient): Promise<UpdateResult> {
    const result = await this.patientRepository.update(id, patient);
    return result;
  }

  async delete(id: string): Promise<DeleteResult> {
    const result = await this.patientRepository.delete(id);
    return result;
  }

  async execute(data: ICreatePatientDtos): Promise<Patient> {
    const result = await this.patientRepository.findByCPF(data.cpf);
    if (!result) {
      return await this.patientRepository.create(data);
    }
    return result;
  }
}

export default PatientService;
