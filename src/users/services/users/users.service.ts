import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserType } from 'src/database/entity/user_types.entity';
import { Users } from 'src/database/entity/users.entity';
import { AddUserDto } from 'src/users/dto/add_user.dto';
import { UpdateUserDto } from 'src/users/dto/update_user.dto';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private usersRepository:Repository<Users>,
    @InjectRepository(UserType) private userTypeRepository:Repository<UserType>
    ){}


    getUsers():Promise<Users[]>{
        return this.usersRepository.find();
    }

    async addUser(addUser:AddUserDto){
        const userType = await this.userTypeRepository.findOneBy({
            id:addUser.userTypeId
        })
        const user: Users = new Users();
        user.userName = addUser.userName;
        user.userEmail = addUser.userEmail;
        user.userAddress = addUser.userAddress;
        user.userPhone = addUser.userPhone;
        user.userType = userType
        return this.usersRepository.save(user);
    }

    async updateUser(id:number, userData:UpdateUserDto){
        const user = await this.usersRepository.findOneBy({id})
        var userid = userData.userTypeId
        const userType = await this.userTypeRepository.findOneBy({id:userid})
        user.userName = userData.userName;
        user.userEmail = userData.userEmail;
        user.userPhone = userData.userPhone;
        user.userAddress = userData.userAddress
        user.userType = userType
        return this.usersRepository.save(user);
    }

}
