import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Users } from "./users.entity"

@Entity()
export class UserType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_type: string;

  // @OneToMany(() => Users, (user) => user.userType)
  // users: Users[];
}