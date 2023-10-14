import { Test, TestingModule } from '@nestjs/testing';
import { VehicleUseTypeService } from './vehicle_use_type.service';

describe('VehicleUseTypeService', () => {
  let service: VehicleUseTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleUseTypeService],
    }).compile();

    service = module.get<VehicleUseTypeService>(VehicleUseTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
