import ICreatePatientDTO from "@modules/patients/dtos/ICreatePatientDtos";
import Patient from "@modules/patients/infra/typeorm/entities/Patients";

export default interface IPatientRepository {
    findById(id: string): Promise<Patient | undefined>;
    findByCPF(cpf: string): Promise<Patient | undefined>;
    create(data: ICreatePatientDTO): Promise<Patient>;
}