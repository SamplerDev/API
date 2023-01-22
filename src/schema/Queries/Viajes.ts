import { graphql, GraphQLList, GraphQLString,GraphQLBoolean, GraphQLID } from "graphql";
import { Context } from "vm";
import { Viajes } from "../../Entities/viajes";
import { isAdmin } from "../../shield/rules";
import { decodedToken } from "../../shield/shield";
import { viajeType } from "../typeDefs/Viaje";




export const GET_ALL_VIAJESDISP = {

    type: new GraphQLList(viajeType),
    async resolve(_:any,args:any,context:Context)
    {
    
        // const authorization = await decodedToken(context)
       
        const result = await Viajes.find({where: { deleted: false}})
        console.log(result)
    
    
        return result;
    
    }
    
    
    }



export const GET_ALL_VIAJES = {

type: new GraphQLList(viajeType),
async resolve(_:any,args:any,context:Context)
{

    // const authorization = await decodedToken(context)
   
    const result = await Viajes.find()
    console.log(result)


    return result;

}


}


export const GET_VIAJE ={
    type:  new GraphQLList(viajeType),
    args: {
        destino : {type: GraphQLString}
    },
    async resolve(_:any,args:any){
        return await Viajes.find({where: {destino: args.destino}}) 

    }

}

export const GET_VIAJE_ID ={
    type:  new GraphQLList(viajeType),
    args: {
        id : {type: GraphQLString}
    },
    async resolve(_:any,args:any){
        return await Viajes.find({where: {idViajes: args.id}}) 

    }

}


export const GET_ALL_VIAJES_DESTINO = {

    type: new GraphQLList(viajeType),
    args: {
        
        destino : {type: GraphQLString}
    },
    async resolve(_:any,{destino}
        :any) {
    
     const result = await Viajes.find({where:{destino:destino} })
    
    console.log(result)
    
    
    return result;
    
    }}
    
    export const GET_ALL_VIAJES_FECHA = {

        type: new GraphQLList(viajeType),
        args: {
            
            fechaSalida : {type: GraphQLString}
        },
        async resolve(_:any,{fechaSalida}:any, context:Context) {

            
        
         const result = await Viajes.find({where:{fechaSalida:fechaSalida} })
        
        console.log(result)
        
        
        return result;
        
        }}