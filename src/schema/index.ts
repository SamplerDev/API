import {GraphQLSchema, GraphQLObjectType} from 'graphql'
import {GREETING} from './Queries/greetings'
import { CREATE_USER,UPDATE_USER,DELETE_USER } from './Mutations/User'
import { CREATE_VIAJE,DELETE_VIAJE,UPDATE_VIAJE } from './Mutations/Viaje'
import  { GET_VIAJE,GET_ALL_VIAJES, GET_ALL_VIAJES_DESTINO, GET_ALL_VIAJES_FECHA, GET_VIAJE_ID} from './Queries/Viajes'
import{GET_ALL_USERS,GET_USER_ID,GET_USER_MAIL} from './Queries/User'
import { LOGIN } from './Queries/login'


const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        greeting: GREETING,
        getAllViajes:  GET_ALL_VIAJES,
        getViaje: GET_VIAJE,
        getAllViajesDestino: GET_ALL_VIAJES_DESTINO,
        getAllViajesFecha: GET_ALL_VIAJES_FECHA,
        getViajeID: GET_VIAJE_ID,        
        getUserMail:GET_USER_MAIL,
        getAllUser:GET_ALL_USERS,
        getUserID: GET_USER_ID,
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createViaje: CREATE_VIAJE,
        deleteViaje: DELETE_VIAJE,
        updateViaje: UPDATE_VIAJE,
        createUser: CREATE_USER,
        updateUser: UPDATE_USER,
        deleteUser: DELETE_USER,
        login: LOGIN,
        
        
    },

})




export const schema = new GraphQLSchema({
query: RootQuery,
mutation: Mutation,

}

)

