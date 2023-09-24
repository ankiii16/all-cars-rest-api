
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Rental } from './rental.entity';
import { UserType } from './user_types.entity';
import { Vehicle } from './vehicle.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  userEmail: string;

  @Column()
  userPhone:number;

  @Column()
  userAddress:string;

  @ManyToOne(() => UserType, (userType) => userType.users)
  @JoinColumn()
  userType: UserType;

  @OneToMany(() => Vehicle, car => car.user)
  @JoinColumn()
  vehicles: Vehicle[];

  @OneToOne(() => Rental, (rental) => rental.id)
  rentedCar: Rental;
}