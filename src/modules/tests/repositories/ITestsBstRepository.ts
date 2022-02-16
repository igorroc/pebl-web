import Bst from "@modules/tests/infra/typeorm/entities/BST";
import ICreateBstDTO from "@modules/tests/dtos/ICreateBstDTO";
import { DeleteResult, UpdateResult } from "typeorm";

export default interface ITestsBstRepository {
  create_bst(data: ICreateBstDTO): Promise<Bst>;
  update_bst(user_id: string, data: ICreateBstDTO): Promise<UpdateResult>;
  delete_bst(user_id: string): Promise<DeleteResult>;
  get_bst(user_id: string): Promise<Bst[]>;
}
