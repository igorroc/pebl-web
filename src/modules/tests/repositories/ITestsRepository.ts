import Bst from '@modules/tests/infra/typeorm/entities/BST';
import ICreateBstDTO from '@modules/tests/dtos/ICreateBstDTO';

import Sternberg from '../infra/typeorm/entities/Sternberg';
import ICreateSternbergDTO from '../dtos/ICreateSternbergDTO';

import Tol from '../infra/typeorm/entities/TOL';
import ICreateTolDTO from '../dtos/ICreateTolDTO';

import Stroop from '../infra/typeorm/entities/Stroop';
import ICreateStroopDTO from '../dtos/ICreateStroopDTO';
export default interface IBstRepository {
    create_bst(data: ICreateBstDTO): Promise<Bst>; 
    create_sternberg(data: ICreateSternbergDTO): Promise<Sternberg>;
    create_tol(data: ICreateTolDTO): Promise<Tol>;
    create_stroop(data: ICreateStroopDTO): Promise<Stroop>; 
    findAllBstTests(user_id: string): Promise<Bst[]>;
    findAllSternbergTests(user_id: string): Promise<Sternberg[]>;
    findAllTolTests(user_id: string): Promise<Tol[]>;
    findAllStroopTests(user_id: string): Promise<Stroop[]>;
}
