import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleModule } from './vehicle/vehicle.module';
import { ConnectionOptions } from 'mysql2';
import { Vehicle } from './database/entity/vehicle.entity';
import { Rental } from './database/entity/rental.entity';
import { Users } from './database/entity/users.entity';
import { ValidVehicleType } from './database/entity/valid_vehicle_types.entity';
import { ValidVehicleUseType } from './database/entity/Valid_vehicle_use_types.entity';
import { UserType } from './database/entity/user_types.entity';
import { UsersModule } from './users/users.module';
import { VehicleTypesModule } from './vehicle_types/vehicle_types.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',

      host: "localhost", // Replace with your database host
      port: 3306, // Replace with your database port
      username: "root", // Replace with your database username
      password: "Welcome123", // Replace with your database password
      database: "all_cars", // Replace with your database name
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Rental,Users,Vehicle,ValidVehicleType,ValidVehicleUseType,UserType]), // Include your entity classes here
    VehicleModule,
    UsersModule,
    VehicleTypesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
