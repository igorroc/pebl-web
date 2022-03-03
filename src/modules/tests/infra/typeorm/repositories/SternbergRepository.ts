import ICreateSternbergDTO from "@modules/tests/dtos/ICreateSternbergDTO";
import ITestsSternbergRepository from "@modules/tests/repositories/ITestsSternbergRepository";
import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";
import Sternberg from "../entities/Sternberg";

class SternbergRepository implements ITestsSternbergRepository {
  private ormRepositoryS: Repository<Sternberg>;
  constructor() {
    this.ormRepositoryS = getRepository(Sternberg);
  }

  public async create_sternberg({
    user_id,
    patient_id,
    subnum,
    length,
    trial,
    set,
    stim,
    targetfoil,
    resp,
    corr,
    rt,
  }: ICreateSternbergDTO): Promise<Sternberg> {
    const test = this.ormRepositoryS.create({
      user_id,
      patient_id,
      subnum,
      length,
      trial,
      set,
      stim,
      targetfoil,
      resp,
      corr,
      rt,
    });

    await this.ormRepositoryS.save(test);

    return test;
  }

  public async update_sternberg(
    user_id: string,
    sternberg_data: ICreateSternbergDTO
  ): Promise<UpdateResult> {
    const test = await this.ormRepositoryS.update(user_id, sternberg_data);

    return test;
  }

  public async delete_sternberg(user_id: string): Promise<DeleteResult> {
    const test = await this.ormRepositoryS.delete(user_id);

    return test;
  }

  public async get_sternberg(user_id: string): Promise<Sternberg[]> {
    let tests: Sternberg[];

    tests = await this.ormRepositoryS.find({
      where: {
        id: user_id,
      },
    });
    return tests;
  }
}

export default SternbergRepository;
