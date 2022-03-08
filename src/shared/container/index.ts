import { container } from 'tsyringe';

import ITestRepository from '@modules/tests/repositories/ITestsRepository';
import TestsRepository from '@modules/tests/infra/typeorm/repositories/TestsRepository';

import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';
import BCryptHashProvider from '@modules/users/providers/HashProvider/implementations/BCriptHashProvider';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import IPatientRepository from '@modules/patients/interfaces/IPatientRepository';
import PatientRepository from '@modules/patients/infra/typeorm/repositories/PatientRepository';
import IAuthenticateUserService from '@modules/users/repositories/IAuthenticateUserService';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

container.registerSingleton<ITestRepository>('TestsRepository', TestsRepository);

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);

container.registerSingleton<IUserTokensRepository>('UserTokensRepository', UserTokensRepository);

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);

container.registerSingleton<IPatientRepository>('PatientRepository', PatientRepository);

container.registerSingleton<IAuthenticateUserService>('IAuthenticateUserService', AuthenticateUserService);

