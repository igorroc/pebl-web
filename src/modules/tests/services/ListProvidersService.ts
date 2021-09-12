// import { injectable, inject } from 'tsyringe';

// import IUsersRepository from '@modules/users/repositories/IUsersRepository';

// import User from '@modules/users/infra/typeorm/entities/Users';

// interface Request{
//     user_id: string,
// }

// @injectable()
// class ListProvidersService {
//     constructor(
//         @inject('UsersRepository')
//         private usersRepository: IUsersRepository
//     ){}

//     public async execute({ user_id }: Request): Promise<User[]> {  
//         const users = await this.usersRepository.findAllProviders({
//             except_user_id: user_id,
//         });

//         return users;
//     }

    
// }

// export default ListProvidersService;

