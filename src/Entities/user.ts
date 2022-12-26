import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Unique } from "typeorm";
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false})
  name: string;

  @Column({nullable:false})
  lastName: string;

  @Column({nullable:false})
  userName: string;

  @Column({nullable:false})
  password: string;

  @Column({nullable:false, unique:true})
  mail:string;
  
  @Column()
  role: string;

 /* @Column()
  createdBy?: string;

  @Column()
  createDate?: Date;

  @Column()
  lastModyfiedBy?: string;

  @Column()
  lastModifiedDate?: Date;
*/
}