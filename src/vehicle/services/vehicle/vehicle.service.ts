import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ValidVehicleType } from 'src/database/entity/valid_vehicle_types.entity';
import { Vehicle } from 'src/database/entity/vehicle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehicleService {

    constructor(
        @InjectRepository(Vehicle) private vehicleRepository:Repository<Vehicle>,
        @InjectRepository(ValidVehicleType) private validVehicleTypeRepository: Repository<ValidVehicleType>
        ){}
    
    getListings():Promise<Vehicle[]>{
        return this.vehicleRepository.find();
    }

    addListing(){}

    async getListingsByVehicleType(vehicleType:number){

        // return await this.vehicleRepository
        // .createQueryBuilder('vehicle')
        // .innerJoinAndSelect('vehicle.vehicleType', 'vehicleType')
        // .where('valid_vehicle_type.id = :id', { vehicleType })
        // .getMany();
    }


}
