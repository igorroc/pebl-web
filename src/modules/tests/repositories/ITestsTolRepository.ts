import { DeleteResult, UpdateResult } from "typeorm";
import ICreateTolDTO from "../dtos/ICreateTolDTO";
import Tol from "../infra/typeorm/entities/TOL";

export default interface ITestsTolRepository {
  create_tol(data: ICreateTolDTO): Promise<Tol>;
  update_tol(user_id: string, data: ICreateTolDTO): Promise<UpdateResult>;
  delete_tol(user_id: string): Promise<DeleteResult>;
  get_tol(user_id: string): Promise<Tol[]>;
}
