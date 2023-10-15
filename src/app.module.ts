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
import { UserTypeModule } from './user_type/user_type.module';
import { VehicleUseTypeModule } from './vehicle_use_type/vehicle_use_type.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',

      host: process.env.DB_HOST, // Replace with your database host
      port: Number(process.env.DB_PORT), // Replace with your database port
      username: process.env.DB_USER, // Replace with your database username
      password:process.env.DB_PASSWORD, // Replace with your database password
      database: process.env.DB_NAME, // Replace with your database name
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities:true,
    }),
    TypeOrmModule.forFeature([Rental,Users,Vehicle,ValidVehicleType,ValidVehicleUseType,UserType]), // Include your entity classes here
    VehicleModule,
    UsersModule,
    VehicleTypesModule,
    UserTypeModule,
    VehicleUseTypeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  
}
