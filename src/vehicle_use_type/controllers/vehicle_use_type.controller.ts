import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleUseTypeService } from '../services/vehicle_use_type.service';
import { CreateVehicleUseTypeDto } from '../dto/create-vehicle_use_type.dto';
import { UpdateVehicleUseTypeDto } from '../dto/update-vehicle_use_type.dto';

@Controller('vehicle-use-type')
export class VehicleUseTypeController {
  constructor(private readonly vehicleUseTypeService: VehicleUseTypeService) {}

  @Post()
  create(@Body() createVehicleUseTypeDto: CreateVehicleUseTypeDto) {
    return this.vehicleUseTypeService.create(createVehicleUseTypeDto);
  }

  @Get()
  findAll() {
    return this.vehicleUseTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehicleUseTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleUseTypeDto: UpdateVehicleUseTypeDto) {
    return this.vehicleUseTypeService.update(+id, updateVehicleUseTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehicleUseTypeService.remove(+id);
  }
}
