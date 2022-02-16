import ICreatePatientDTO from "@modules/patients/dtos/ICreatePatientDtos";
import IPatientRepository from "@modules/patients/interfaces/IPatientRepository";
import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";
import Patient from "../entities/Patients";

class PatientRepository implements IPatientRepository {
  private ormRepository: Repository<Patient>;

  constructor() {
    this.ormRepository = getRepository(Patient);
  }

  public async findById(id: string): Promise<Patient | undefined> {
    const patient = await this.ormRepository.findOne(id);

    return patient;
  }

  public async findByCPF(cpf: string): Promise<Patient | undefined> {
    const patient = await this.ormRepository.findOne({
      where: { cpf },
    });
    return patient;
  }

  public async create(patientData: ICreatePatientDTO): Promise<Patient> {
    const patient = this.ormRepository.create(patientData);

    await this.ormRepository.save(patient);

    return patient;
  }

  public async update(
    patient_id: string,
    patientData: ICreatePatientDTO
  ): Promise<UpdateResult> {
    const patient = this.ormRepository.update(patient_id, patientData);

    return patient;
  }

  public async delete(patient_id: string): Promise<DeleteResult> {
    const patient = this.ormRepository.delete(patient_id);

    return patient;
  }
}

export default PatientRepository;
