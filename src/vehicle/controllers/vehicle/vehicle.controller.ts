import { Controller, Get, Post } from '@nestjs/common';
import { VehicleService } from 'src/vehicle/services/vehicle/vehicle.service';

@Controller('listings')
export class VehicleController {
    constructor(private vehicleService: VehicleService){}

    @Get()
    getVehicles(){
        return this.vehicleService.getListings();
    }

    @Post()
    addVehicle(){

    }
}
