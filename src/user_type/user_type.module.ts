import { Module } from '@nestjs/common';
import { UserTypeService } from './services/user_type.service';
import { UserTypeController } from './controllers/user_type.controller';
import { UserType } from 'src/database/entity/user_types.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserType])],
  controllers: [UserTypeController],
  providers: [UserTypeService],
})
export class UserTypeModule {}
