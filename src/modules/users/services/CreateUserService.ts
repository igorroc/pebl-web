import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

import AppError from '@shared/errors/AppError';
import User from '@modules/users/infra/typeorm/entities/Users';
import { DeleteResult, UpdateResult } from 'typeorm';

interface Request {
    email: string;
    password: string;
    name: string;
    age: number;
    gender: string;
    scholarity: string;
    workField: string;
    headWorkField: string;
    maritalStatus: string;
}

@injectable()
class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider,
    ) { }

    public async execute({
        email,
        password,
        age,
        name,
        gender,
        scholarity,
        workField,
        headWorkField,
        maritalStatus,
    }: Request): Promise<User> {

        const checkUserExists = await this.usersRepository.findByEmail(email);

        if (checkUserExists) {
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
            headWorkField,
            maritalStatus,
        });

        return user;
    }

    public async update(user_id: string, user: User): Promise<UpdateResult> {
        return this.usersRepository.update(user_id, user);
    }

    public async delete(user_id: string): Promise<DeleteResult> {
        return this.usersRepository.delete(user_id);
    }


    public async findById(id: string): Promise<User | undefined> {
        const user = await this.usersRepository.findById(id);

        return user;
    }
}

export default CreateUserService;