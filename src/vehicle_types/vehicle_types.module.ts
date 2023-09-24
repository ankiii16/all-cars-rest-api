import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VehicleTypesController } from './controllers/vehicle_types.controller';
import { ValidVehicleType } from 'src/database/entity/valid_vehicle_types.entity';
import { VehicleTypesService } from './services/vehicle_types.service';

@Module({
  imports: [TypeOrmModule.forFeature([ValidVehicleType])],
  controllers: [VehicleTypesController],
  providers: [VehicleTypesService],
})
export class VehicleTypesModule {}
