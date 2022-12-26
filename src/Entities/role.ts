import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class role extends BaseEntity {

  @PrimaryColumn()
  roleID: string;

  @Column()
  name:Number;

  @Column()
  description:Number;
  
 
}