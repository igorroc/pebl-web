import { DeleteResult, UpdateResult } from "typeorm";
import ICreateSternbergDTO from "../dtos/ICreateSternbergDTO";
import Sternberg from "../infra/typeorm/entities/Sternberg";

export default interface ITestsSternbergRepository {
  create_sternberg(data: ICreateSternbergDTO): Promise<Sternberg>;
  update_sternberg(
    user_id: string,
    data: ICreateSternbergDTO
  ): Promise<UpdateResult>;
  delete_sternberg(user_id: string): Promise<DeleteResult>;
  get_sternberg(user_id: string): Promise<Sternberg[]>;
}
