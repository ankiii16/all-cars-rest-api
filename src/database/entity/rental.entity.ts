
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Decimal128, OneToOne, JoinColumn } from 'typeorm';
import { Users } from './users.entity';
import { Vehicle } from './vehicle.entity';

@Entity()
export class Rental {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Users, (user) => user.rentedCar)
  @JoinColumn()
  user: Users;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.rentalHistory)
  vehicle: Vehicle;

  @Column()
  rentalStartDate: Date;

  @Column()
  rentalEndDate: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  totalPrice: number;


}