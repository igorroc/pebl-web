import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { getCustomRepository } from 'typeorm';

import CreateTestsService from '@modules/tests/services/CreateTestsService';
import BstRepository from '../../typeorm/repositories/BstRepository';
import SternbergRepository from '../../typeorm/repositories/SternbergRepository';
import TolRepository from '../../typeorm/repositories/TolRepository';
import StroopRepository from '../../typeorm/repositories/StroopRepository';

export default class BstController { 
    public async create_bst(request: Request, response: Response): Promise<Response> {
        const {
            user_id,
            patient_id,
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
        } = request.body;

        //console.error(request.body);
        console.log("create_bst body",request.body);
        //const user_id = request.body;

        const createTest = container.resolve(CreateTestsService);

        const test = await createTest.execute_bst({
            user_id,
            patient_id,
            subnum,
            type,
            block,
            congruency,
            trial,
            stim,
            resp,
            corr,
            rt,
            tooslow,
        });

        console.log("create_bst test",test)

        return response.json(test); 
    } 

    public async create_sternberg(request: Request, response: Response): Promise<Response> {
        const {
            user_id,
            patient_id,
            subnum,
            length,
            trial,
            set,
            stim,
            targetfoil,
            resp,
            corr,
            rt
        } = request.body;

        const createTest = container.resolve(CreateTestsService);

        const test = await createTest.execute_sternberg({
            user_id,
            patient_id,
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

        return response.json(test); 
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
        const {
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
        } = request.body;

        const createTest = container.resolve(CreateTestsService);

        const test = await createTest.execute_stroop({
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

        return response.json(test); 
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
