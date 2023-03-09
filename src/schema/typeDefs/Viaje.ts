import { GraphQLID, GraphQLObjectType,GraphQLString} from 'graphql'
import { DateResolver, GraphQLBigInt, GraphQLSafeInt } from 'graphql-scalars'
import { Timestamp } from 'graphql-scalars/typings/mocks'
import { GraphQLBoolean } from 'graphql/type'
var GraphQLDate = require('graphql-date')



export const viajeType = new GraphQLObjectType({
name: 'Viaje',
fields: {
    idViajes: {type: GraphQLID},
    destino:{type:GraphQLString},
    fechaSalida: {type : GraphQLDate},
    cantidadDias:{type:GraphQLString},
    precio:{type: GraphQLString},
    hotel: {type: GraphQLString},
    lugaresDisp:{type:GraphQLSafeInt},
    bus:{type:GraphQLString},
    tipoComida: {type: GraphQLString},
    linkFoto:{type:GraphQLString},
    deleted:{type:GraphQLBoolean},
    creadoPor: {type: GraphQLString}
    
}

})



