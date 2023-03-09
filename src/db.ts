import {DataSource} from 'typeorm'
import { User } from './Entities/user';
import { Viajes } from './Entities/viajes';
export const conectDB =  new DataSource({
    type: 'mysql',
    username: 'root',
    password: 'root',
    port: 3306,
    host : 'localhost',
    database : 'viaje',
    entities: [Viajes,User],
    synchronize: true,
    ssl: false


});