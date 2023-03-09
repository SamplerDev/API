import {Entity,BaseEntity,PrimaryGeneratedColumn,Column, Timestamp, OneToMany, ManyToOne} from "typeorm"
import { DateTimeResolver, DateTimeTypeDefinition } from "graphql-scalars"
import { User } from "./user";


@Entity()
export class Viajes extends BaseEntity{

    @PrimaryGeneratedColumn()
    idViajes: number;

    @Column()
    destino: string ;

    @Column({default:null})
    fechaSalida!: Date;

    @Column()
    cantidadDias: string;

    @Column()
    precio: GLfloat;

    @Column()
    hotel: string;

    @Column()
    lugaresDisp:number;

    @Column()
    bus: string;

    @Column()
    tipoComida: string;

    @Column()
    linkFoto: string;

    @Column('boolean',{default:true})
    status:boolean;

    @Column('boolean', {default:false})
    deleted:boolean;
    
    @Column()
    creadoPor: number;
    
   


}




