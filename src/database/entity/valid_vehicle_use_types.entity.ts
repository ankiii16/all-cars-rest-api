
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { UserType } from './valid_user_types.entity';
import { Vehicle } from './vehicle.entity';

@Entity()
export class ValidVehicleUseType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vehicle_use_type: string;

  // @OneToMany(() => Vehicle, (vehicle) => vehicle.vehicle_use_type)
  // vehicles: Vehicle[];
}