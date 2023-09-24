import { Users } from 'src/database/entity/users.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<Users>);
    getUsers(): Promise<Users[]>;
}
