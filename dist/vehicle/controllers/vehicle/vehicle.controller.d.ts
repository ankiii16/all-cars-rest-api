import { VehicleService } from 'src/vehicle/services/vehicle/vehicle.service';
export declare class VehicleController {
    private vehicleService;
    constructor(vehicleService: VehicleService);
    getVehicles(): Promise<import("../../../database/entity/vehicle.entity").Vehicle[]>;
    addVehicle(): void;
}
