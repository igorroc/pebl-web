import { container } from 'tsyringe';

import ITestRepository from '@modules/tests/repositories/ITestsRepository';
import TestsRepository from '@modules/tests/infra/typeorm/repositories/TestsRepository';

import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';
import BCryptHashProvider from '@modules/users/providers/HashProvider/implementations/BCriptHashProvider';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

container.registerSingleton<ITestRepository>('TestsRepository', TestsRepository);

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);

container.registerSingleton<IUserTokensRepository>('UserTokensRepository', UserTokensRepository);

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
