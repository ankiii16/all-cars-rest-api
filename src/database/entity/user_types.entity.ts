import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Users } from "./users.entity"

@Entity()
export class UserType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userType: string;

  @OneToMany(() => Users, (user) => user.userType)
  users: Users[];
}