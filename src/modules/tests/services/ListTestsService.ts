import { injectable, inject } from 'tsyringe';

import ITestsRepository from '../repositories/ITestsRepository';

import Bst from '../infra/typeorm/entities/BST';

interface Request{
    user_id: string,
}

@injectable()
class ListTestsService {
    constructor(
        @inject('TestsRepository')
        private testsRepository: ITestsRepository
    ){}

    public async execute_bst({user_id}: Request): Promise<Bst[]> {  
        const tests = await this.testsRepository.findAllBstTests(user_id);

        return tests;
    }

}

export default ListTestsService;

