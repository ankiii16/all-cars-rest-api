
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Decimal128, OneToOne, JoinColumn } from 'typeorm';
import { Users } from './users.entity';
import { Vehicle } from './vehicle.entity';

@Entity("Rentals")
export class Rental {
  @PrimaryGeneratedColumn()
  rental_id: number;

  // @OneToOne(() => Users, (user) => user.rentedCar)
  // @JoinColumn()
  // customer_user_id: Users;

  // @ManyToOne(() => Vehicle, (vehicle) => vehicle.rental_history)
  // car_id: string;

  @Column()
  rental_start_date: Date;

  @Column()
  rental_end_date: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  total_price: number;


}