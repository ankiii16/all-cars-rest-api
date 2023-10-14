import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleUseTypeDto } from './create-vehicle_use_type.dto';

export class UpdateVehicleUseTypeDto extends PartialType(CreateVehicleUseTypeDto) {}
