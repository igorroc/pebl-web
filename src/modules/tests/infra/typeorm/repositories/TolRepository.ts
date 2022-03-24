import ICreateTolDTO from "@modules/tests/dtos/ICreateTolDTO";
import ITestsTolRepository from "@modules/tests/repositories/ITestsTolRepository";
import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";
import Tol from "../entities/TOL";


class TolRepository implements ITestsTolRepository {
  private ormRepositoryT: Repository<Tol>;

  constructor() {
    this.ormRepositoryT = getRepository(Tol);
  }

  public async create_tol({
    result_id,
    user_id,
    patient_id,
    sub,
    trial,
    size,
    current,
    end,
    step,
    reset,
    tries,
    score,
    abstime,
    trialtime,
    clicktime,
    done,
  }: ICreateTolDTO): Promise<Tol> {
    const test = this.ormRepositoryT.create({
      result_id,
      user_id,
      patient_id,
      sub,
      trial,
      size,
      current,
      end,
      step,
      reset,
      tries,
      score,
      abstime,
      trialtime,
      clicktime,
      done,
    });

    await this.ormRepositoryT.save(test);

    return test;
  }

  public async update_tol(
    user_id: string,
    tol_data: ICreateTolDTO
  ): Promise<UpdateResult> {
    const test = await this.ormRepositoryT.update(user_id, tol_data);

    return test;
  }

  public async delete_tol(user_id: string): Promise<DeleteResult> {
    const test = await this.ormRepositoryT.delete(user_id);

    return test;
  }

  public async get_tol(user_id: string): Promise<Tol[]> {
    let tests: Tol[];

    tests = await this.ormRepositoryT.find({
      where: {
        id: user_id,
      },
    });

    return tests;
  }

  public async findAndCount(user_id: string): Promise<Tol[]> {
    let tests: Tol[];

    tests = await this.ormRepositoryT.find({
      where: {
        id: user_id,
      },
    });

    return tests;
  }

  public async find(): Promise<Tol[]> {
    let tests: Tol[];

    tests = await this.ormRepositoryT.find();

    return tests;
  }
}

export default TolRepository;
