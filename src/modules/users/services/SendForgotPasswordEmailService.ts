import { injectable, inject } from 'tsyringe';
import path from 'path';

import IUsersRepository from '../repositories/IUsersRepository';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import IUserTokensRepository from '../repositories/IUserTokensRepository';


import AppError from '@shared/errors/AppError';
// import User from '@modules/users/infra/typeorm/entities/Users';


interface Request{
    email: string,
}

@injectable()
class SendForgotPasswordEmailService{
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('MailProvider')
        private mailProvider: IMailProvider,

        @inject('UserTokensRepository')
        private userTokensRepository: IUserTokensRepository,
    ){}

    public async execute({ email }: Request): Promise<void>{
        const user = await this.usersRepository.findByEmail(email);

        if(!user) {
            throw new AppError('User does not exists.');
        }
        
        const { token } = await this.userTokensRepository.generate(user.id);

        const forgotPasswordTemplate = path.resolve(__dirname, '..', 'views', 'forgot_password.hbs');

        await this.mailProvider.sendMail({
            to: {
                name: user.name,
                email: user.email,
            },
            subject: '[PEBL-BR] Recuperação de Senha',
            templateData: {
                file: forgotPasswordTemplate,
                variables: {
                    name: user.name,
                    link: `http://localhost:3000/reset_password?token=${token}`,
                },
            },
        });   
    }
}

export default SendForgotPasswordEmailService;  