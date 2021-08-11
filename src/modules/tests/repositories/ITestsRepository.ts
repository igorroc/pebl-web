import Bst from '@modules/tests/infra/typeorm/entities/BST';
import ICreateBstDTO from '@modules/tests/dtos/ICreateBstDTO';
import Sternberg from '../infra/typeorm/entities/Sternberg';
import ICreateSternbergDTO from '../dtos/ICreateSternbergDTO';

export default interface IBstRepository {
    findAllBstTests(user_id: string): Promise<Bst[]>;
    findAllSternbergTests(user_id: string): Promise<Sternberg[]>;
    create_bst(data: ICreateBstDTO): Promise<Bst>; 
    create_sternberg(data: ICreateSternbergDTO): Promise<Sternberg>;
}
