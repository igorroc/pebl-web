import { getRepository } from 'typeorm';
import path from 'path';
import User from '../infra/typeorm/entities/Users';
import fs from 'fs';
import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';

interface Request{
    user_id: string;
    avatarFilename: string;
}

@injectable()
class UpdateUserAvatarService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('StorageProvider')
        private storageProvider: IStorageProvider,

    ){}

    public async execute({ user_id, avatarFilename }: Request): Promise<User> {  
        const user = await this.usersRepository.findById(user_id);

        if (!user) {
            throw new AppError('Only authenticated users can change avatar.', 401);
        }

        // if(user.avatar) {
        //     await this.storageProvider.deleteFile(user.avatar);
        // }

        // const fileName = await this.storageProvider.saveFile(avatarFilename);

        // user.avatar = fileName;

        // await this.usersRepository.save(user);

        return user;
    }
}

export default UpdateUserAvatarService;