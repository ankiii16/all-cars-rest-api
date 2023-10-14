import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AddUserDto } from 'src/users/dto/add_user.dto';
import { UpdateUserDto } from 'src/users/dto/update_user.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}

    @Get()
    getUsers(){
        return this.userService.getUsers();
    }

    @Post()
    addUSer(@Body() addUser:AddUserDto){
        return this.userService.addUser(addUser);
    }

    @Patch(':id')
    updateUser(@Param('id') id: number, @Body() addUser:UpdateUserDto){
        return this.userService.updateUser(id, addUser);
    }

}
