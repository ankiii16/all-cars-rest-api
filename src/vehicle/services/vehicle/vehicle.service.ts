import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ValidVehicleUseType } from 'src/database/entity/Valid_vehicle_use_types.entity';
import { Users } from 'src/database/entity/users.entity';
import { ValidVehicleType } from 'src/database/entity/valid_vehicle_types.entity';
import { Vehicle } from 'src/database/entity/vehicle.entity';
import { AddVehicleDto } from 'src/vehicle/dto/add_vehicle.dto';
import { Repository, EntityManager, DeepPartial } from 'typeorm';

@Injectable()
export class VehicleService {

    constructor(
        @InjectRepository(Vehicle) private vehicleRepository:Repository<Vehicle>,
        @InjectRepository(ValidVehicleType) private validVehicleTypeRepository: Repository<ValidVehicleType>,
        @InjectRepository(Users) private userRepository: Repository<Users>,
        @InjectRepository(ValidVehicleUseType) private validVehicleUseTypeRepository: Repository<ValidVehicleUseType>
        ){}
    
    getListings():Promise<Vehicle[]>{
        return this.vehicleRepository.find();
    }

    async addListing(addVehicleDto:AddVehicleDto){
        const vehiclePartial = await this.mapAddVehicleDtoToPartial(addVehicleDto);
        const vehicle = this.vehicleRepository.create(vehiclePartial);
        return this.vehicleRepository.save(vehicle)
    }

    async getListingsByVehicleType(vehicleType:number){

        return await this.vehicleRepository
            .createQueryBuilder('vehicle')
            .innerJoinAndSelect('vehicle.vehicleType', 'vehicleType')
            .where('vehicleType.id = :id', { id: vehicleType })
            .getMany();
    }

    async mapAddVehicleDtoToPartial(addVehicleDto: AddVehicleDto): Promise<DeepPartial<Vehicle>> {
        const user = await this.userRepository.findOneBy({
            id:addVehicleDto.userId
        })
        const vehicleType = await this.validVehicleTypeRepository.findOneBy({
            id:addVehicleDto.vehicleTypeId
        })
        const vehicleUseType = await this.validVehicleUseTypeRepository.findOneBy({
            id:addVehicleDto.vehicleUseTypeId
        })

        return {
          user: user,
          vehicleName: addVehicleDto.vehicleName,
          vehicleDescription: addVehicleDto.vehicleDescription,
          vehiclePriceWeekly: addVehicleDto.vehiclePriceWeekly,
          vehicleType: vehicleType,
          vehicleUseType: vehicleUseType,
        };
      }
}
