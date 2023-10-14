import { Injectable } from '@nestjs/common';
import { CreateVehicleUseTypeDto } from '../dto/create-vehicle_use_type.dto';
import { UpdateVehicleUseTypeDto } from '../dto/update-vehicle_use_type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ValidVehicleUseType } from 'src/database/entity/Valid_vehicle_use_types.entity';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class VehicleUseTypeService {
  constructor(@InjectRepository(ValidVehicleUseType) private validVehicleUseTypeRepository: Repository<ValidVehicleUseType>){}

  async create(createVehicleUseTypeDto: CreateVehicleUseTypeDto) {
    const vehicleUseTypePartial = await this.mapAddVehicleUseTypeDtoToPartial(createVehicleUseTypeDto);
    var vehicleUseType = this.validVehicleUseTypeRepository.create(vehicleUseTypePartial)
    return this.validVehicleUseTypeRepository.save(vehicleUseType);
  }

  findAll() {
    return this.validVehicleUseTypeRepository.find();
  }

  findOne(id: number) {
    return this.validVehicleUseTypeRepository.findBy({id});
  }

  async update(id: number, updateVehicleUseTypeDto: UpdateVehicleUseTypeDto) {
    var vehicleUseType = await this.validVehicleUseTypeRepository.findOneBy({id})
    vehicleUseType.vehicleUseType = updateVehicleUseTypeDto.vehicleUseType;
    return this.validVehicleUseTypeRepository.save(vehicleUseType);
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.validVehicleUseTypeRepository.delete(id);
  }

  async mapAddVehicleUseTypeDtoToPartial(addVehicleUseTypeDto: CreateVehicleUseTypeDto): Promise<DeepPartial<ValidVehicleUseType>> {
    return {
      vehicleUseType: addVehicleUseTypeDto.vehicleUseType
    };
  }
}
