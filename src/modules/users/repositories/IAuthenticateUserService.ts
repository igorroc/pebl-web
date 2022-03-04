import User from "@modules/users/infra/typeorm/entities/Users";
import ICreateUserDTO from "@modules/users/dtos/ICreateUserDTO";
import { DeleteResult, UpdateResult } from "typeorm";
interface Request{
    email: string;
    password: string;
}

interface Response{
    user: User;
    token: string;
}

export default interface IAuthenticateUserService {
execute({email, password}: Request): Promise<Response>
}
