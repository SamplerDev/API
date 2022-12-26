
import { GraphQLID, GraphQLObjectType,GraphQLString} from 'graphql'
import { DateResolver, GraphQLEmailAddress } from 'graphql-scalars'
import RequestContext from 'express'

export const userType = new GraphQLObjectType({
name: 'User',
fields: {
    id: {type: GraphQLID},
    name:{type: GraphQLString},
    lastName: {type: GraphQLString},
    userName:{type: GraphQLString},
    password: {type: GraphQLString},
    mail:{type: GraphQLEmailAddress},
    role: {type: GraphQLString},
   /* createdBy:{type :GraphQLString},
    createDate: {type: DateResolver},
    lastModifiedBy: {type:GraphQLString},
    lastModifiedDate:{type: DateResolver}*/

    
  
    
   
  
  
    
    
    
}

})

declare global{
namespace Express{
    interface Request{
        user:string

    }

}

}


