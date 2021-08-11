import { getRepository, Repository } from 'typeorm';

import ITestsRepository from '@modules/tests/repositories/ITestsRepository';
import ICreateBstDTO from '@modules/tests/dtos/ICreateBstDTO';
import ICreateSternbergDTO from '@modules/tests/dtos/ICreateSternbergDTO';

import Bst from '@modules/tests/infra/typeorm/entities/BST';
import Sternberg from '../entities/Sternberg';

class TestsRepository implements ITestsRepository{
    private ormRepositoryB: Repository<Bst>;
    private ormRepositoryS: Repository<Sternberg>;

    constructor() { 
        this.ormRepositoryB = getRepository(Bst);
        this.ormRepositoryS = getRepository(Sternberg);
    }

    public async create_bst({
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
    }: ICreateBstDTO): Promise<Bst>{
        const test = this.ormRepositoryB.create({  
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

        await this.ormRepositoryB.save(test);

        return test;
    }

    public async create_sternberg({
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
    }: ICreateSternbergDTO): Promise<Sternberg>{
        const test = this.ormRepositoryS.create({  
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

        await this.ormRepositoryS.save(test);

        return test;
    }

    public async findAllBstTests(user_id: string): Promise<Bst[]> {
        let tests: Bst[];
    
        tests = await this.ormRepositoryB.find({
            where: {
                id: user_id,
             }
        });
        
        return tests;
    }

    public async findAllSternbergTests(user_id: string): Promise<Sternberg[]> {
        let tests: Sternberg[];
    
        tests = await this.ormRepositoryS.find({
            where: {
                id: user_id,
             }
        });
        
        return tests;
    }
}

export default TestsRepository;