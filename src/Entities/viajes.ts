import {Entity,BaseEntity,PrimaryGeneratedColumn,Column} from "typeorm"
import { DateTimeResolver, DateTimeTypeDefinition } from "graphql-scalars"





@Entity()
export class Viajes extends BaseEntity{

    @PrimaryGeneratedColumn()
    idViajes: number;

    @Column()
    destino: string ;

    @Column()
    fecha: Date;

    @Column()
    cantidadDias: string;

    @Column()
    precio: GLfloat;

    @Column()
    hotel: string;

    @Column()
    bus: string;

    @Column()
    tipoComida: string;

    @Column()
    linkFoto: string;




}




