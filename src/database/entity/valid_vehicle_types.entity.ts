
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { UserType } from './valid_user_types.entity';
import { Vehicle } from './vehicle.entity';

@Entity()
export class ValidVehicleType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vehicle_type: string;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.vehicle_type)
  vehicles: Vehicle[];

}