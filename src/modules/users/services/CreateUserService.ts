import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

import AppError from '@shared/errors/AppError';
import User from '@modules/users/infra/typeorm/entities/Users';

interface Request{
    email: string;
    password: string;
    name:string;
    age: number;
    gender: boolean;
    scholarity: string;
    workField: string;
    headScholarity: string;
    headWorkField: string;
    maritalStatus: number;
    currentWork: string;
    glasses: boolean;
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
        email,
        password,
        age,
        name,
        gender,
        scholarity,
        workField,
        headScholarity,
        headWorkField,
        maritalStatus,
        currentWork,
        glasses,
    }: Request): Promise<User>{

        const checkUserExists = await this.usersRepository.findByEmail(email);
       
        if(checkUserExists){
           throw new AppError('Email adress already used.');
        }

        const hashedPassword = await this.hashProvider.generateHash(password);

        const user = await this.usersRepository.create({
            email,
            name,
            password: hashedPassword,
            age,
            gender,
            scholarity,
            workField,
            headScholarity,
            headWorkField,
            maritalStatus,
            currentWork,
            glasses,
       });

       return user;
    }
}

export default CreateUserService;