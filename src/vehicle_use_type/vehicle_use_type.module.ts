import { Module } from '@nestjs/common';
import { VehicleUseTypeService } from './services/vehicle_use_type.service';
import { VehicleUseTypeController } from './controllers/vehicle_use_type.controller';
import { ValidVehicleUseType } from 'src/database/entity/Valid_vehicle_use_types.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ValidVehicleUseType])],
  controllers: [VehicleUseTypeController],
  providers: [VehicleUseTypeService],
})
export class VehicleUseTypeModule {}
