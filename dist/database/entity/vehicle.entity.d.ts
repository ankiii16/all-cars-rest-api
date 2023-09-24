import { Rental } from './rental.entity';
import { Users } from './users.entity';
export declare class Vehicle {
    car_id: number;
    owner_user_id: Users;
    vehicle_name: string;
    vehicle_description: string;
    vehicle_price_weekly: number;
    vehicle_type: string;
    vehicle_use_type: string;
    rental_history: Rental[];
}
