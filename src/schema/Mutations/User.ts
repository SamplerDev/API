import { GraphQLString,GraphQLBoolean,GraphQLID,GraphQLInputObjectType } from "graphql";
import { User } from "../../Entities/user";
import { userType } from "../typeDefs/User";
import {MessageType} from '../typeDefs/messageType'
import bcrypt from "bcrypt"
import { createJWToken } from "../../util/auth";


export const  CREATE_USER= {

    type: userType,
    args: {        
      name:{type: GraphQLString},
      lastName: {type: GraphQLString},
      userName:{type: GraphQLString},
      password: {type: GraphQLString},
      mail:{type: GraphQLString},
      role: {type: GraphQLString},

            },
    async resolve(_:any, args: any){

        const {name,lastName,userName,password,mail,role} = args
      
        const encryptPassword = await bcrypt.hash(password,10);     
       
        try{
       
          const result = await User.insert({
            name:name,
            lastName:lastName,
            userName:userName,
            password: encryptPassword,
            mail:mail,
            role:role          
          })

        const token = createJWToken({id:result.identifiers[0].id,name,lastName,userName,mail,role})
        
        console.log(result,token)
        return {...args, id: result.identifiers[0].id}}
        catch(error){
        console.log(error)
    } 
    }}


    export const UPDATE_USER = {
        type: MessageType,
        args: {
          id: { type: GraphQLID },
          input: {
            type: new GraphQLInputObjectType({
              name: "UserInput",
              fields: () => ({
                name: { type: GraphQLString },
                lastName:{type:GraphQLString},
                userName: { type: GraphQLString },
                oldPassword: { type: GraphQLString },
                newPassword: { type: GraphQLString },
                mail:{type:GraphQLString},
                role:{type:GraphQLString},
              }),
            }),
          },
        },
        async resolve(_: any, { id, input }: any) {

            try{
          const userFound = await User.findOne({where: {id:id}});
          if (!userFound) throw new Error("User not found");
      
          // Compare old password with the new password
          const isMatch = await bcrypt.compare(
            userFound?.password as string,
            input.oldPassword
          );
          if (!isMatch) {
           
            throw new Error("Passwords does not match")
        
        };
          }catch(error)
          {

            console.log(error)
          }
          // Hasing the password and deleteting oldPassword and new Password
          const newPassword = await bcrypt.hash(input.newPassword,10);
          delete input.oldPassword;
          delete input.newPassword;
      
          // Adding passsword to the input for update
          input.password = newPassword;
      
          const response = await User.update({ id }, input);
      
          if (response.affected === 0) return { message: "User not found" };
      
          return {
            success: true,
            message: "Update User successfully",
          };
        },
      };
     
      


    export const DELETE_USER = {

        type: GraphQLBoolean,
        args : {
            id: { type: GraphQLID   }
        },
        async resolve(_:any,{id}:any){
            const result = await User.delete(id);
            if (result.affected===1){
              console.log(result)
                return true;
            }
            return false
        }
    }
    
    