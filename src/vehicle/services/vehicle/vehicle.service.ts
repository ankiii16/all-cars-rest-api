import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from 'src/database/entity/vehicle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehicleService {

    constructor(@InjectRepository(Vehicle) private vehicleRepository:Repository<Vehicle>){}
    
    getListings():Promise<Vehicle[]>{
        return this.vehicleRepository.find();
    }

    addListing(){}


}
