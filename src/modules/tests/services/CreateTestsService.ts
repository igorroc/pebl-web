import { injectable, inject } from 'tsyringe';

import ITestsRepository from '@modules/tests/repositories/ITestsRepository';

import Bst from '@modules/tests/infra/typeorm/entities/BST';
import ICreateTestDTO from '../dtos/ICreateBstDTO';

import Sternberg from '../infra/typeorm/entities/Sternberg';
import ICreateSternbergDTO from '../dtos/ICreateSternbergDTO';

import Tol from '../infra/typeorm/entities/TOL';
import ICreateTolDTO from '../dtos/ICreateTolDTO';
import ICreateStroopDTO from '../dtos/ICreateStroopDTO';
import Stroop from '../infra/typeorm/entities/Stroop';

@injectable()
class CreateTestsService {
    constructor(
        @inject('TestsRepository')
        private testsRepository: ITestsRepository,
    ){}
    
    public async execute_bst({ 
        user_id,
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

    public async execute_tol({ 
        user_id,
        sub,
        trial,
        size,
        current,
        end,
        step,
        reset,
        tries,
        score,
        abstime,
        trialtime,
        clicktime,
        done
        }: ICreateTolDTO): Promise<Tol> {
        const test = await this.testsRepository.create_tol({
            user_id,
            sub,
            trial,
            size,
            current,
            end,
            step,
            reset,
            tries,
            score,
            abstime,
            trialtime,
            clicktime,
            done
        });

        return test; 
    }

    public async execute_stroop({ 
        user_id,
        subnum,
        round,
        block,
        trial,
        word,
        color,
        part,
        xpos,
        ypos,
        resp,
        rname,
        correct,
        intrusion,
        numresponses,
        time0,
        timea,
        timeend,
        trialtime,
        responsetime
        }: ICreateStroopDTO): Promise<Stroop> {
        const test = await this.testsRepository.create_stroop({
            user_id,
            subnum,
            round,
            block,
            trial,
            word,
            color,
            part,
            xpos,
            ypos,
            resp,
            rname,
            correct,
            intrusion,
            numresponses,
            time0,
            timea,
            timeend,
            trialtime,
            responsetime
        });

        return test; 
    }
}

export default CreateTestsService;