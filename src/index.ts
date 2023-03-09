import app from "./app";
import {DataSource} from 'typeorm'
import {conectDB} from "./db"

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