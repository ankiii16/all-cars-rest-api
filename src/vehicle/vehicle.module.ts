import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from 'src/database/entity/vehicle.entity';
import { VehicleController } from './controllers/vehicle/vehicle.controller';
import { VehicleService } from './services/vehicle/vehicle.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle])],
  controllers: [VehicleController],
  providers: [VehicleService]
})
export class VehicleModule {}
