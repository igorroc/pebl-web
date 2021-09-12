import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

import AppError from '@shared/errors/AppError';
import User from '@modules/users/infra/typeorm/entities/Users';

interface Request{
    name: string,
    email: string,
    password: string,
    birthDate: Date, 
    carrer: string
}

@injectable()
class CreateUserService{
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider,
    ){}

    public async execute({ 
        name,
        email,
        password, 
        birthDate, 
        carrer}: Request): Promise<User>{
        
        const checkUserExists = await this.usersRepository.findByEmail(email);
       
        if(checkUserExists){
           throw new AppError('Email adress already used.');
        }

        const hashedPassword = await this.hashProvider.generateHash(password);

        const user = await this.usersRepository.create({
            name,
            email,
            password: hashedPassword,
            birthDate, 
            carrer
       });

       return user;
    }
}

export default CreateUserService;