import { Vehicle } from 'src/database/entity/vehicle.entity';
import { Repository } from 'typeorm';
export declare class VehicleService {
    private vehicleRepository;
    constructor(vehicleRepository: Repository<Vehicle>);
    getListings(): Promise<Vehicle[]>;
    addListing(): void;
}
