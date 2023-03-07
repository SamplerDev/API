import {Entity,BaseEntity,PrimaryGeneratedColumn,Column, Timestamp} from "typeorm"
import { DateTimeResolver, DateTimeTypeDefinition } from "graphql-scalars"


@Entity()
export class Viajes extends BaseEntity{

    @PrimaryGeneratedColumn()
    idViajes: number;

    @Column()
    destino: string ;

    @Column()
    fechaSalida: Date;

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

    @Column()
    status:String;

    @Column('boolean', {default:false})
    deleted:Boolean;

   


}




