
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Rental } from './rental.entity';
import { UserType } from './valid_user_types.entity';
import { Vehicle } from './vehicle.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  user_name: string;

  @Column()
  user_email: string;

  @Column()
  user_phone:number;

  @Column()
  user_address:string;

  @ManyToOne(() => UserType, (userType) => userType.users)
  userType: UserType;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.owner_user_id)
  vehicles: Vehicle[];

  @OneToOne(() => Rental, (rental) => rental.customer_user_id)
  rentedCar: Rental;
}