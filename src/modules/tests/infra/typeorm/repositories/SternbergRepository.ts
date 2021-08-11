import { EntityRepository, Repository } from 'typeorm';
import Sternberg from '../entities/Sternberg';

@EntityRepository(Sternberg)
class SternbergRepository extends Repository <Sternberg> {
    
}

export default SternbergRepository;