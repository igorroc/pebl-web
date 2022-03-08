import { injectable, inject } from 'tsyringe';
import { v4 as uuid_v4 } from "uuid";

import ITestsRepository from '@modules/tests/repositories/ITestsRepository';

import Bst from '@modules/tests/infra/typeorm/entities/BST';
import ICreateTestDTO from '../dtos/ICreateBstDTO';

import Sternberg from '../infra/typeorm/entities/Sternberg';
import ICreateSternbergDTO from '../dtos/ICreateSternbergDTO';

import Tol from '../infra/typeorm/entities/TOL';
import ICreateTolDTO from '../dtos/ICreateTolDTO';
import ICreateStroopDTO from '../dtos/ICreateStroopDTO';
import Stroop from '../infra/typeorm/entities/Stroop';
import {IBstResultDTO, IFaseBst} from '../dtos/IBstResultDTO';
import { ISternbergResultDTO, IFaseSternberg } from '../dtos/ISternbergResultDTO';


@injectable()
class CreateTestsService {
    constructor(
        @inject('TestsRepository')
        private testsRepository: ITestsRepository,
    ){}
    
    public async execute_bst({user_id, patient_id, resultadoFinal}: IBstResultDTO): Promise<Bst[]> {
        
        const result_id = uuid_v4();
        const test: Bst[] = [];
        
        for(const item of Object.entries(resultadoFinal)){
            let fase: IFaseBst = item[1];
            test.push(await this.testsRepository.create_bst({
                result_id: result_id,
                user_id: user_id,
                patient_id: patient_id,
                subnum: patient_id,
                type: fase.type,
                block: fase.block,
                congruency: fase.congruency,
                trial: fase.trial,
                stim: fase.stim,
                resp: fase.resp,
                corr: fase.corr,
                rt: fase.rt,
                tooslow: fase.tooslow
            }));
        }

        return test; 
    }

    public async execute_sternberg({user_id, patient_id, resultadoFinal}: ISternbergResultDTO): Promise<Sternberg[]> {
        const result_id = uuid_v4();
        const test: Sternberg[] = [];

        for(const item of Object.entries(resultadoFinal)){
            let fase: IFaseSternberg = item[1];
            test.push(await this.testsRepository.create_sternberg({
                result_id: result_id,
                user_id: user_id,
                patient_id: patient_id,
                subnum: patient_id,
                length: fase.length,
                trial: fase.trial,
                set: fase.set,
                stim: fase.stim,
                targetfoil: fase.targetfoil,
                resp: fase.resp,
                corr: fase.corr,
                rt: fase.rt
            }));
        }

        return test; 
    }

    public async execute_tol({ 
        user_id,
        patient_id,
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
            patient_id,
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
        patient_id,
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
            patient_id,
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