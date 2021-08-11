import { injectable, inject } from 'tsyringe';

import Bst from '@modules/tests/infra/typeorm/entities/BST';
import ITestsRepository from '@modules/tests/repositories/ITestsRepository';
import ICreateTestDTO from '../dtos/ICreateBstDTO';
import ICreateSternbergDTO from '../dtos/ICreateSternbergDTO';
import Sternberg from '../infra/typeorm/entities/Sternberg';

@injectable()
class CreateTestsService {
    constructor(
        @inject('TestsRepository')
        private testsRepository: ITestsRepository,
    ){}
    
    public async execute_bst({ 
        user_id,
        deadline,
        subnum,
        type,
        block,
        congruency,
        trial,
        stim,
        resp,
        corr,
        rt,
        tooslow
     }: ICreateTestDTO): Promise<Bst> {
        const test = await this.testsRepository.create_bst({
            user_id,
            deadline,
            subnum,
            type,
            block,
            congruency,
            trial,
            stim,
            resp,
            corr,
            rt,
            tooslow
        });

        return test; 
    }

    public async execute_sternberg({ 
        user_id,
        deadline,
        subnum,
        length,
        trial,
        set,
        stim,
        targetfoil,
        resp,
        corr,
        rt
        }: ICreateSternbergDTO): Promise<Sternberg> {
        const test = await this.testsRepository.create_sternberg({
            user_id,
            deadline,
            subnum,
            length,
            trial,
            set,
            stim,
            targetfoil,
            resp,
            corr,
            rt
        });

        return test; 
    }
}

export default CreateTestsService;