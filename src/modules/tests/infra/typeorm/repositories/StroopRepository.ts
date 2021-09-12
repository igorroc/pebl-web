import { EntityRepository, Repository } from 'typeorm';
import Stroop from '../entities/Stroop';

@EntityRepository(Stroop)
class StroopRepository extends Repository <Stroop> {
    
}

export default StroopRepository;