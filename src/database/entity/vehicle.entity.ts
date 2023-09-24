
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Decimal128, JoinTable, OneToMany } from 'typeorm';
import { Rental } from './rental.entity';
import { Users } from './users.entity';
import { UserType } from './valid_user_types.entity';
import { ValidVehicleType } from './valid_vehicle_types.entity';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  car_id: number;

  @ManyToOne(() => Users, (user) => user.vehicles)
  owner_user_id: Users;

  @Column()
  vehicle_name: string;

  @Column()
  vehicle_description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  vehicle_price_weekly: number;

  @ManyToOne(() => ValidVehicleType, (vehicle_type) => vehicle_type.vehicles)
  vehicle_type: string;

  @ManyToOne(() => ValidVehicleType, (vehicle_use_type) => vehicle_use_type.vehicles)
  vehicle_use_type: string;

  @OneToMany(() => Rental, (rental) => rental.car_id)
  rental_history: Rental[];

}