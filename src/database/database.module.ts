import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rental } from './entity/rental.entity';
import { Users } from './entity/users.entity';
import { UserType } from './entity/user_types.entity';
import { ValidVehicleType } from './entity/valid_vehicle_types.entity';
import { ValidVehicleUseType } from './entity/Valid_vehicle_use_types.entity';
import { Vehicle } from './entity/vehicle.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'Welcome123',
          database: 'all_cars',
          entities: [Rental,Users,Vehicle,ValidVehicleType,ValidVehicleUseType,UserType],
          synchronize: true,
        }),
      ],
})
export class DatabaseModule {}
