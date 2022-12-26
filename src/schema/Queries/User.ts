import { graphql, GraphQLList, GraphQLString,GraphQLBoolean, GraphQLID } from "graphql";
import { GraphQLEmailAddress } from "graphql-scalars";
import { Context } from "vm";
import { User } from "../../Entities/user";
import { userType } from "../typeDefs/User";



export const GET_ALL_USERS = {

type: new GraphQLList(userType),
async resolve() {

 const result = await User.find()




return result;

}
}

export const GET_USER_ID ={
    type:  new GraphQLList(userType),
    args: {
        id : {type: GraphQLID}
    },
    async resolve(_:any,args:any,context:Context){
        const user =await User.find({where: {id: args.id}}) 

        return user

    }

}

export const GET_USER_MAIL ={
    type:  new GraphQLList(userType),
    args: {
       mail : {type: GraphQLString}
    },
    async resolve(_:any,args:any){
        return await User.find({where: {mail: args.mail}}) 

    }

}



