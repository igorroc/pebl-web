import { EntityRepository, Repository } from 'typeorm';
import Tol from '../entities/TOL';

@EntityRepository(Tol)
class TolRepository extends Repository <Tol> {
    
}

export default TolRepository;