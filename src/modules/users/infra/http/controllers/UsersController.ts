import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../../typeorm/repositories/UserRepository';

export default class UsersController {
    public async create(request: Request, response: Response): Promise<Response> {
        try{
            const { 
                name,
                email,
                password, 
                birthDate, 
                carrer
             } = request.body;
    
            const createUser = container.resolve(CreateUserService);
    
            const user = await createUser.execute({
                name,
                email,
                password, 
                birthDate, 
                carrer
            });
    
            delete user.password;

            return response.json(user);
        }
        catch (err){
            return response.status(400).json({error: err.message});
        }
    }

    public async index(request: Request, response: Response): Promise <Response> {
        const usersRepository = getCustomRepository(UserRepository);
        
        const users = await usersRepository.find();

        return response.json(users);
    }
}
