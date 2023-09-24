
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { UserType } from './user_types.entity';
import { Vehicle } from './vehicle.entity';

@Entity()
export class ValidVehicleType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vehicleType: string;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.vehicleType)
  vehicles: Vehicle[];

}