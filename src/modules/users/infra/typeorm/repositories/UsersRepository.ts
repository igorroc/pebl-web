import {
  getRepository,
  Repository,
  Not,
  UpdateResult,
  DeleteResult,
} from "typeorm";

import IUsersRepository from "@modules/users/repositories/IUsersRepository";
import ICreateUserDTO from "@modules/users/dtos/ICreateUserDTO";

import User from "@modules/users/infra/typeorm/entities/Users";

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }

  public async update(user_id: string, user: User): Promise<UpdateResult> {
    return this.ormRepository.update(user_id, user);
  }

  public async delete(user_id: string): Promise<DeleteResult> {
    return this.ormRepository.delete(user_id);
  }
}

export default UsersRepository;
