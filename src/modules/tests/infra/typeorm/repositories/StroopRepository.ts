import ICreateStroopDTO from "@modules/tests/dtos/ICreateStroopDTO";
import ITestsStroopRepository from "@modules/tests/repositories/ITestsStroopRepository";
import {
  DeleteResult,
  EntityRepository,
  getRepository,
  Repository,
  UpdateResult,
} from "typeorm";
import Stroop from "../entities/Stroop";


class StroopRepository implements ITestsStroopRepository {
  private ormRepositorySt: Repository<Stroop>;

  constructor() {
    this.ormRepositorySt = getRepository(Stroop);
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
    const test = this.ormRepositorySt.create({
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

    await this.ormRepositorySt.save(test);

    return test;
  }

  public async update_stroop(
    user_id: string,
    stroop_data: ICreateStroopDTO
  ): Promise<UpdateResult> {
    const test = await this.ormRepositorySt.update(user_id, stroop_data);

    return test;
  }

  public async delete_stroop(user_id: string): Promise<DeleteResult> {
    const test = await this.ormRepositorySt.delete(user_id);

    return test;
  }

  public async get_stroop(user_id: string): Promise<Stroop[]> {
    let tests: Stroop[];

    tests = await this.ormRepositorySt.find({
      where: {
        id: user_id,
      },
    });

    return tests;
  }

  public async findAndCount(user_id: string): Promise<Stroop[]> {
    let tests: Stroop[];

    tests = await this.ormRepositorySt.find({
      where: {
        id: user_id,
      },
    });

    return tests;
  }

  public async find(): Promise<Stroop[]> {
    let tests: Stroop[];

    tests = await this.ormRepositorySt.find();

    return tests;
  }
}

export default StroopRepository;
