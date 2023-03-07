import app from "./app";
import {DataSource} from 'typeorm'
import {  Viajes } from "./Entities/viajes";
import {  User } from "./Entities/user";
import { role } from "./Entities/role";
import { userToRole } from "./Entities/userToRole";






const conectDB =  new DataSource({
    type: 'mysql',
    username: 'root',
    password: 'root',
    port: 3306,
    host : 'localhost',
    database : 'viaje',
    entities: [Viajes,User,role,userToRole],
    synchronize: true,
    ssl: false


});

async function main() {
   
    app.listen(3000)
    console.log('corriendo app en el puerto 3000')

    conectDB.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
}


main();