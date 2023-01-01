import { GraphQLID, GraphQLObjectType,GraphQLString} from 'graphql'
import { DateResolver } from 'graphql-scalars'
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
    bus:{type:GraphQLString},
    tipoComida: {type: GraphQLString},
    linkFoto:{type:GraphQLString},
}

})



