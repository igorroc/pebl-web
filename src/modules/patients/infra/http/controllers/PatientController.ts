import PatientService from "@modules/patients/services/PatientService"
import { Request, Response } from "express"
import { container } from "tsyringe"

export default class PatientController {
    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const patient = request.body

            const createpatient = container.resolve(PatientService)

            const patientDb = await createpatient.execute(patient)

            return response.json(patientDb)

        } catch (err) {
            return response.status(400).json({ error: err })
        }
        
    }

    public async searchCpf(request: Request,
        response: Response): Promise<Response> {

            try {
                const {cpf} = request.body
                const createpatient = container.resolve(PatientService)
    
                const patientDb = await createpatient.searchCpf(cpf)

                return response.json(patientDb)
                
            } catch (err) {
                return response.status(400).json({ error: err })
            }

    }
}
