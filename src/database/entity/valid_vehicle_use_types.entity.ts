
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { UserType } from './user_types.entity';
import { Vehicle } from './vehicle.entity';

@Entity()
export class ValidVehicleUseType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vehicleUseType: string;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.vehicleUseType)
  vehicles: Vehicle[];
}