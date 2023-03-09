import { Context } from "apollo-server-core";
import { graphql, GraphQLBoolean, GraphQLID, GraphQLString } from "graphql";
import { GraphQLSafeInt } from "graphql-scalars";
import { User } from "../../Entities/user";

import { Viajes } from "../../Entities/viajes";
import { decodedToken } from "../../shield/shield";
import { viajeType } from "../typeDefs/Viaje";

export const CREATE_VIAJE = {

    type: viajeType,
    args: {        
        destino:{type:GraphQLString},
        fechaSalida:{type: GraphQLString},
        cantidadDias:{type:GraphQLString},
        precio:{type: GraphQLString},
        hotel: {type: GraphQLString},
        bus:{type:GraphQLString},
        tipoComida: {type: GraphQLString},
        linkFoto:{type:GraphQLString},
        lugaresDisp:{type:GraphQLSafeInt},
        status:{type:GraphQLString}       
    },
    async resolve(_:any, args: any,context:Context){
        const {id,destino,fechaSalida,cantidadDias,precio,hotel,bus,tipoComida,linkFoto,lugaresDisp,status} = args
        try{
            let id= decodedToken(context)
            let user = await User.findOne({where:{id:id.id}})

        const result = await Viajes.insert({
            
            destino:destino,
            fechaSalida:fechaSalida,
            cantidadDias:cantidadDias,
            precio:precio,
            hotel:hotel,
            bus:bus,
            tipoComida:tipoComida,
            linkFoto:linkFoto,
            lugaresDisp:lugaresDisp,
            status:status,
            creadoPor:  user?.id

        })
        console.log(result)
        return {fechaSalida: result.generatedMaps[0].fechaSalida,
        destino: result.generatedMaps[0].destino, }
    }
    catch(error){
        console.log(error)
    } 
    }}



    export const DELETE_VIAJE = {

        type: GraphQLBoolean,
        args : {
            id: { type: GraphQLID   }
        },
        async resolve(_:any,{id}:any){
            const result = await Viajes.delete(id);
            if (result.affected===1){
                return true;
            }
            return false
        }
    }
    
    
    export const UPDATE_VIAJE= {
    
    type: GraphQLString,
    args: {
    
        idViajes: {type: GraphQLID},
        destino:{type:GraphQLString},
        fechaSalida:{type: GraphQLString},
        cantidadDias:{type:GraphQLString},
        precio:{type: GraphQLString},
        hotel: {type: GraphQLString},
        bus:{type:GraphQLString},
        tipoComida: {type: GraphQLString},
        linkFoto:{type:GraphQLString},
        deleted:{type:GraphQLBoolean},
        lugaresDisp:{type:GraphQLSafeInt},
        status:{type:GraphQLString}
        
    },
    
    async resolve(_:any,{idViajes,
        destino,
        fechaSalida,
        cantidadDias,
        precio,
        hotel,
        bus,
        tipoComida,
        linkFoto,
        deleted,
        lugaresDisp,
        status     }:any){
    
        const viajeFound = await Viajes.findOne({where: {idViajes:idViajes}})
        
        if(viajeFound===null){
            return 'El viaje que quiere modificar no existe'
        }else{
         const response =   await Viajes.update({idViajes},{destino,
                fechaSalida,
                cantidadDias,
                precio,
                hotel,
                bus,
                tipoComida,
                linkFoto,
                deleted,
                lugaresDisp,
                status   } )

            console.log(response)
            return `el viaje con el id:${idViajes} ha sido modificado exitosamente`;
            
        }

     

            

        
    
}
}