import {rule,and,or,not} from 'graphql-shield';
import { Context } from 'vm';
import { decodedToken } from './shield';
import { User } from '../Entities/user';

export const isAdmin = rule({cache:'contextual'})(async (parent, args, context: Context, info) => {
    const externalToken = decodedToken(context)
    const user= await User.find({where: {id: externalToken.user.id}})
    return  user[1].role && externalToken.user.role === 'ADMIN' && externalToken.user.name === user[1].name&& externalToken.user.userName === user[1].userName
    //externalToken.user.name === user[1].name && externalToken.user.userName === user[1].userName && externalToken.user.role === user[1].role? true : false;
      
    
   
  })


