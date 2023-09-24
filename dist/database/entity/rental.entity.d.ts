import { Users } from './users.entity';
export declare class Rental {
    rental_id: number;
    customer_user_id: Users;
    car_id: string;
    rental_start_date: Date;
    rental_end_date: Date;
    total_price: number;
}
