import { GraphQLArgs, GraphQLString } from "graphql";
import { GraphQLEmailAddress } from "graphql-scalars";
import { User } from "../../Entities/user";
import { createJWToken } from "../../util/auth";
import bcrypt, { hash } from "bcrypt"
import { Context } from "vm";

export const LOGIN = {

    type: GraphQLString,
    args: {
        
        pass: {type: GraphQLString},
        mail:{type: GraphQLString}
        },
        async resolve(_:any, args:any,context:Context){
            const passOut = args.pass
            const userFound = await User.findOne({where: {mail:args.mail}});
            const passIn= userFound!.password;
            const compare = await bcrypt.compare(passOut,passIn);
            
            

            
            
                

            if( !compare || !userFound  ){throw new Error('invalid credentials') }else{
            const token = createJWToken({id:userFound.id,name:userFound.name,userName:userFound.userName,
                    role:userFound.role})
                    //const authorization:string= context.authorization
                 //console.log(authorization)       
            return token
        }
            }
          

}