import { EntityRepository, Repository } from 'typeorm';
import Bst from '../entities/BST';

@EntityRepository(Bst)
class BstsRepository extends Repository <Bst> {
    
}

export default BstsRepository;