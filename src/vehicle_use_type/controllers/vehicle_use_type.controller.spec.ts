import { Test, TestingModule } from '@nestjs/testing';
import { VehicleUseTypeController } from './vehicle_use_type.controller';
import { VehicleUseTypeService } from '../services/vehicle_use_type.service';

describe('VehicleUseTypeController', () => {
  let controller: VehicleUseTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleUseTypeController],
      providers: [VehicleUseTypeService],
    }).compile();

    controller = module.get<VehicleUseTypeController>(VehicleUseTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
