import User from "@modules/users/infra/typeorm/entities/Users";
import ICreateUserDTO from "@modules/users/dtos/ICreateUserDTO";
import { DeleteResult, UpdateResult } from "typeorm";

export default interface IUserRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
  update(user_id: string, user: User): Promise<UpdateResult>;
  delete(user_id: string): Promise<DeleteResult>;
}
