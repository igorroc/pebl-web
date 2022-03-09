import { getRepository, Repository } from "typeorm";

import ITestsRepository from "@modules/tests/repositories/ITestsRepository";

import Bst from "@modules/tests/infra/typeorm/entities/BST";
import ICreateBstDTO from "@modules/tests/dtos/ICreateBstDTO";

import Sternberg from "../entities/Sternberg";
import ICreateSternbergDTO from "@modules/tests/dtos/ICreateSternbergDTO";

import Tol from "@modules/tests/infra/typeorm/entities/TOL";
import ICreateTolDTO from "@modules/tests/dtos/ICreateTolDTO";

import Stroop from "@modules/tests/infra/typeorm/entities/Stroop";
import ICreateStroopDTO from "@modules/tests/dtos/ICreateStroopDTO";

class TestsRepository implements ITestsRepository {
  private ormRepositoryB: Repository<Bst>;
  private ormRepositoryS: Repository<Sternberg>;
  private ormRepositoryT: Repository<Tol>;
  private ormRepositoryST: Repository<Stroop>;

  constructor() {
    this.ormRepositoryB = getRepository(Bst);
    this.ormRepositoryS = getRepository(Sternberg);
    this.ormRepositoryT = getRepository(Tol);
    this.ormRepositoryST = getRepository(Stroop);
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

  public async create_sternberg({
    result_id,
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
      result_id,
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

  public async create_tol({
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

  public async create_stroop({
    result_id,
    user_id,
    patient_id,
    subnum,
    round,
    block,
    trial,
    word,
    color,
    part,
    xpos,
    ypos,
    resp,
    rname,
    correct,
    intrusion,
    numresponses,
    time0,
    timea,
    timeend,
    trialtime,
    responsetime,
  }: ICreateStroopDTO): Promise<Stroop> {
    const test = this.ormRepositoryST.create({
      result_id,
      user_id,
      patient_id,
      subnum,
      round,
      block,
      trial,
      word,
      color,
      part,
      xpos,
      ypos,
      resp,
      rname,
      correct,
      intrusion,
      numresponses,
      time0,
      timea,
      timeend,
      trialtime,
      responsetime,
    });

    await this.ormRepositoryST.save(test);

    return test;
  }

  public async findAllBstTests(user_id: string): Promise<Bst[]> {
    let tests: Bst[];

    tests = await this.ormRepositoryB.find({
      where: {
        id: user_id,
      },
    });

    return tests;
  }

  public async findAllSternbergTests(user_id: string): Promise<Sternberg[]> {
    let tests: Sternberg[];

    tests = await this.ormRepositoryS.find({
      where: {
        id: user_id,
      },
    });

    return tests;
  }

  public async findAllTolTests(user_id: string): Promise<Tol[]> {
    let tests: Tol[];

    tests = await this.ormRepositoryT.find({
      where: {
        id: user_id,
      },
    });

    return tests;
  }

  public async findAllStroopTests(user_id: string): Promise<Stroop[]> {
    let tests: Stroop[];

    tests = await this.ormRepositoryST.find({
      where: {
        id: user_id,
      },
    });

    return tests;
  }
}

export default TestsRepository;
