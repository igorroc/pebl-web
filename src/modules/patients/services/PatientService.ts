import { injectable, inject } from 'tsyringe';
import ICreatePatientDtos from '../dtos/ICreatePatientDtos';
import Patient from '../infra/typeorm/entities/Patients';
import IPatientRepository from '../interfaces/IPatientRepository';
import { IPatientService } from '../interfaces/IPatientService';

@injectable()
class PatientService implements IPatientService {

    constructor(
        @inject('PatientRepository')
        private patientRepository: IPatientRepository,
    ) { }

    async searchCpf(cpf: string): Promise<Patient> {
        const result = await this.patientRepository.findByCPF(cpf) 
        return result
    }

    async execute(data: ICreatePatientDtos): Promise<Patient> {
        const result = await this.patientRepository.findByCPF(data.cpf) 
        if(!result){
            return await this.patientRepository.create(data)
        }
        return result
    }
}

export default PatientService;