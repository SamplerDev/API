import { graphqlHTTP } from 'express-graphql'
import {schema} from './schema'
import express from 'express'
import { permissions } from './shield/shield';
import { applyMiddleware } from 'graphql-middleware';


const schemaWithPermissions = applyMiddleware(schema,permissions)


 export const app = express();

// app.use(authenticate)


 app.use(
    '/graphql',
    graphqlHTTP((req)=>{

        const {authorization} = req.headers
        console.log(authorization)
       return{ graphiql: {headerEditorEnabled: true},
        schema:schemaWithPermissions,
        context:{
              authorization  
        }
    
    }

    }))




    export default app;

    