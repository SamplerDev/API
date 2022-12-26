import { GraphQLBoolean, GraphQLID, GraphQLString } from "graphql";

import { Viajes } from "../../Entities/viajes";
import { viajeType } from "../typeDefs/Viaje";

export const CREATE_VIAJE = {

    type: viajeType,
    args: {        
        destino:{type:GraphQLString},
        fecha:{type: GraphQLString},
        cantidadDias:{type:GraphQLString},
        precio:{type: GraphQLString},
        hotel: {type: GraphQLString},
        bus:{type:GraphQLString},
        tipoComida: {type: GraphQLString},
        linkFoto:{type:GraphQLString},       
    },
    async resolve(_:any, args: any){
        const {id,destino,fecha,cantidadDias,precio,hotel,bus,tipoComida,linkFoto} = args
        try{
        const result = await Viajes.insert({
            
            destino:destino,
            fecha:fecha,
            cantidadDias:cantidadDias,
            precio:precio,
            hotel:hotel,
            bus:bus,
            tipoComida:tipoComida,
            linkFoto:linkFoto
        })
        console.log(result)
        return {...args, id: result.identifiers[0].id}
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
    
    type: GraphQLBoolean,
    args: {
    
        idViajes: {type: GraphQLID},
        destino:{type:GraphQLString},
        fecha:{type: GraphQLString},
        cantidadDias:{type:GraphQLString},
        precio:{type: GraphQLString},
        hotel: {type: GraphQLString},
        bus:{type:GraphQLString},
        tipoComida: {type: GraphQLString},
        linkFoto:{type:GraphQLString},
    },
    
    async resolve(_:any,{idViajes,
        destino,
        fecha,
        cantidadDias,
        precio,
        hotel,
        bus,
        tipoComida,
        linkFoto}:any){
    
        const viajeFound = await Viajes.findOne({where: {idViajes:idViajes}})
        if(viajeFound===null){
            return false
        }else{
         const response =   await Viajes.update({idViajes},{destino,
                fecha,
                cantidadDias,
                precio,
                hotel,
                bus,
                tipoComida,
                linkFoto} )

            console.log(response)
            return true;
            
        }

     

            

        
    
}
}