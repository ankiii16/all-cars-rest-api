import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/database/entity/users.entity';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { UserType } from 'src/database/entity/user_types.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users,UserType])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
