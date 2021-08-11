import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/Users';

@EntityRepository(User)
class UserRepository extends Repository <User> {
    
}

export default UserRepository;