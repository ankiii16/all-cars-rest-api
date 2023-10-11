import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddVehicleDto } from 'src/vehicle/dto/add_vehicle.dto';
import { VehicleService } from 'src/vehicle/services/vehicle/vehicle.service';

@Controller('listings')
export class VehicleController {
    constructor(private vehicleService: VehicleService){}

    @Get()
    getVehicles(){
        return this.vehicleService.getListings();
    }

    @Post()
    addVehicle(@Body() addvehicle:AddVehicleDto ){
        return this.vehicleService.addListing(addvehicle)
    }

    @Get('byVehicleType/:vehicleType')
    getVehicleByVehicleType(@Param('vehicleType') vehicleType: number){
        return this.vehicleService.getListingsByVehicleType(vehicleType)
    }
}
