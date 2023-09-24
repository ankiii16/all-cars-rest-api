import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValidVehicleType } from 'src/database/entity/valid_vehicle_types.entity';
import { Vehicle } from 'src/database/entity/vehicle.entity';
import { VehicleController } from './controllers/vehicle/vehicle.controller';
import { VehicleService } from './services/vehicle/vehicle.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle,ValidVehicleType])],
  controllers: [VehicleController],
  providers: [VehicleService]
})
export class VehicleModule {}
