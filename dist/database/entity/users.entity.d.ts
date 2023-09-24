import { Rental } from './rental.entity';
import { UserType } from './valid_user_types.entity';
import { Vehicle } from './vehicle.entity';
export declare class Users {
    user_id: number;
    user_name: string;
    user_email: string;
    user_phone: number;
    user_address: string;
    userType: UserType;
    vehicles: Vehicle[];
    rentedCar: Rental;
}
