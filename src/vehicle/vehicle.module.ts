import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValidVehicleType } from 'src/database/entity/valid_vehicle_types.entity';
import { Vehicle } from 'src/database/entity/vehicle.entity';
import { VehicleController } from './controllers/vehicle/vehicle.controller';
import { VehicleService } from './services/vehicle/vehicle.service';
import { ValidVehicleUseType } from 'src/database/entity/Valid_vehicle_use_types.entity';
import { Users } from 'src/database/entity/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle,ValidVehicleType,ValidVehicleUseType,Users])],
  controllers: [VehicleController],
  providers: [VehicleService]
})
export class VehicleModule {}
