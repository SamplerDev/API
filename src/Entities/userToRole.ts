import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class userToRole extends BaseEntity {

  @PrimaryColumn()
  userID:Number;
  
  @Column()
  roleID: string;
}