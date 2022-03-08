import ICreateBstDTO from "@modules/tests/dtos/ICreateBstDTO";
import ITestsBstRepository from "@modules/tests/repositories/ITestsBstRepository";
import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";
import Bst from "../entities/BST";

class BstsRepository implements ITestsBstRepository {
  private ormRepositoryB: Repository<Bst>;

  constructor() {
    this.ormRepositoryB = getRepository(Bst);
  }

  public async create_bst({
    result_id,
    user_id,
    patient_id,
    subnum,
    type,
    block,
    congruency,
    trial,
    stim,
    resp,
    corr,
    rt,
    tooslow,
  }: ICreateBstDTO): Promise<Bst> {
    const test = this.ormRepositoryB.create({
      result_id,
      user_id,
      patient_id,
      subnum,
      type,
      block,
      congruency,
      trial,
      stim,
      resp,
      corr,
      rt,
      tooslow,
    });

    await this.ormRepositoryB.save(test);

    return test;
  }

  public async update_bst(
    user_id: string,
    bst_data: ICreateBstDTO
  ): Promise<UpdateResult> {
    const test = await this.ormRepositoryB.update(user_id, bst_data);

    return test;
  }

  public async delete_bst(user_id: string): Promise<DeleteResult> {
    const test = await this.ormRepositoryB.delete(user_id);

    return test;
  }

  public async get_bst(user_id: string): Promise<Bst[]> {
    let tests: Bst[];

    tests = await this.ormRepositoryB.find({
      where: {
        id: user_id,
      },
    });

    return tests;
  }

  public async findAndCount(user_id: string): Promise<Bst[]> {
    let tests: Bst[];

    tests = await this.ormRepositoryB.find({
      where: {
        id: user_id,
      },
    });

    return tests;
  }

  public async find(): Promise<Bst[]> {
    let tests: Bst[];

    tests = await this.ormRepositoryB.find();

    return tests;
  }
}

export default BstsRepository;
