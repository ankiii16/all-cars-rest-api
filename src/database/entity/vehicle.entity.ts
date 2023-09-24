
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Decimal128, JoinTable, OneToMany, JoinColumn } from 'typeorm';
import { Rental } from './rental.entity';
import { Users } from './users.entity';
import { UserType } from './user_types.entity';
import { ValidVehicleType } from './valid_vehicle_types.entity';
import { ValidVehicleUseType } from './Valid_vehicle_use_types.entity';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.vehicles)
  @JoinColumn()
  user: Users;

  @Column()
  vehicleName: string;

  @Column()
  vehicleDescription: string;

  @Column('decimal', { precision: 10, scale: 2 })
  vehiclePriceWeekly: number;

  @ManyToOne(() => ValidVehicleType, (vehicleType) => vehicleType.vehicles)
  @JoinColumn()
  vehicleType: ValidVehicleType;

  @ManyToOne(() => ValidVehicleUseType, (vehicleUseType) => vehicleUseType.vehicles)
  vehicleUseType: ValidVehicleUseType;

  @OneToMany(() => Rental, (rental) => rental.id)
  rentalHistory: Rental[];

}