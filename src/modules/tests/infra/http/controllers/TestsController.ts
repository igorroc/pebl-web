import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { getCustomRepository } from 'typeorm';

import Bst from '@modules/tests/infra/typeorm/entities/BST';
import {IBstResultDTO} from '@modules/tests/dtos/IBstResultDTO';
import CreateTestsService from '@modules/tests/services/CreateTestsService';
import BstRepository from '../../typeorm/repositories/BstRepository';
import SternbergRepository from '../../typeorm/repositories/SternbergRepository';
import TolRepository from '../../typeorm/repositories/TolRepository';
import StroopRepository from '../../typeorm/repositories/StroopRepository';
import { ISternbergResultDTO } from '@modules/tests/dtos/ISternbergResultDTO';
import { IStroopResultDTO } from '@modules/tests/dtos/IStroopResultDTO';

export default class BstController { 
    public async create_bst(request: Request, response: Response): Promise<Response> {
        //console.log("create_bst body",request.body);
        //const user_id: request.user.id;
        const user_id = "9153b417-eb8a-4173-8217-a5abb2857c72"
        const result: IBstResultDTO = request.body;
        
        const createTest = container.resolve(CreateTestsService);

        const bts_result = await createTest.execute_bst(user_id, result)
        //console.log("create_bst body",bts_result);
        return response.json(bts_result); 
    } 

    public async create_sternberg(request: Request, response: Response): Promise<Response> {
        //console.log("create_sternberg body",request.body);
        //const user_id: request.user.id;
        let user_id = "9153b417-eb8a-4173-8217-a5abb2857c72"
        const result: ISternbergResultDTO = request.body;
        
        const createTest = container.resolve(CreateTestsService);

        const sternberg_result = await createTest.execute_sternberg(user_id, result)
        //console.log("create_sternberg result",sternberg_result)
        return response.json(sternberg_result);
    }

    public async create_tol(request: Request, response: Response): Promise<Response> {
        const {
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
        } = request.body;

        const createTest = container.resolve(CreateTestsService);

        const test = await createTest.execute_tol({
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

        return response.json(test); 
    }

    public async create_stroop(request: Request, response: Response): Promise<Response> {
        //console.log("create_stroop body",request.body);
        //const user_id: request.user.id;
        let user_id = "9153b417-eb8a-4173-8217-a5abb2857c72"
        const result: IStroopResultDTO = request.body;

        const createTest = container.resolve(CreateTestsService);

        const stroop_result = await createTest.execute_stroop(user_id, result)
        //console.log("create_stroop body",bts_result);
        return response.json(stroop_result);
    }

    public async show_userbst(request: Request, response: Response): Promise <Response> { 
        const testRepository = getCustomRepository(BstRepository);

        const user_id = request.body;
            
        const test = await testRepository.findAndCount(user_id);

        return response.json(test);
    }

    public async index_bst(request: Request, response: Response): Promise <Response> { 
        const testRepository = getCustomRepository(BstRepository);
            const test = await testRepository.find();

            return response.json(test);
    }

    public async show_usersternberg(request: Request, response: Response): Promise <Response> { 
        const testRepository = getCustomRepository(SternbergRepository);

        const user_id = request.body;
            
        const test = await testRepository.findAndCount(user_id);

        return response.json(test);
    }

    public async index_sternberg(request: Request, response: Response): Promise <Response> { 
        const testRepository = getCustomRepository(SternbergRepository);
            
            const test = await testRepository.find();

            return response.json(test);
    }

    public async show_usertol(request: Request, response: Response): Promise <Response> { 
        const testRepository = getCustomRepository(TolRepository);

        const user_id = request.body;
            
        const test = await testRepository.findAndCount(user_id);

        return response.json(test);
    }

    public async index_tol(request: Request, response: Response): Promise <Response> { 
        const testRepository = getCustomRepository(TolRepository);
            
            const test = await testRepository.find();

            return response.json(test);
    }

    public async show_userstroop(request: Request, response: Response): Promise <Response> { 
        const testRepository = getCustomRepository(StroopRepository);

        const user_id = request.body;
            
        const test = await testRepository.findAndCount(user_id);

        return response.json(test);
    }

    public async index_stroop(request: Request, response: Response): Promise <Response> { 
        const testRepository = getCustomRepository(StroopRepository);
            
            const test = await testRepository.find();

            return response.json(test);
    }
}
