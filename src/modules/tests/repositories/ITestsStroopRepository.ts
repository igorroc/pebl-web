import { DeleteResult, UpdateResult } from "typeorm";
import ICreateStroopDTO from "../dtos/ICreateStroopDTO";
import Stroop from "../infra/typeorm/entities/Stroop";

export default interface ITestsStroopRepository {
  create_stroop(data: ICreateStroopDTO): Promise<Stroop>;
  update_stroop(user_id: string, data: ICreateStroopDTO): Promise<UpdateResult>;
  delete_stroop(user_id: string): Promise<DeleteResult>;
  get_stroop(user_id: string): Promise<Stroop[]>;
}
