
import {rule,and,or,not} from 'graphql-shield';
import { Context } from 'vm';
import { decodedToken } from './shield';
import { User } from '../Entities/user';

export const isAdmin = rule({cache:'contextual'})(async (parent, args, context: Context, info) => {
    const externalToken = await decodedToken(context)
    const user = await User.findOne({where: {id : externalToken.id}})
    
   
    
   // console.log(`esto es del debug user${user!.role} external token ${externalToken[1].role}`)
    return externalToken.user.role === user?.role
    /*const comprobacion1=  externalToken[1].role && user!.role == 'ADMIN';
    console.log(`esto es del debug user${user!.role} external token ${externalToken[1].role}`)
   /*const comprobacion2 = externalToken.userName == user[1].userName
   const comprobacion3 = externalToken.role == user[1].role*/
  
    /*return  true /*&& comprobacion2 == true && comprobacion3 == true*/ 
    //externalToken.user.name === user[1].name && externalToken.user.userName === user[1].userName && externalToken.user.role === user[1].role? true : false;
      
    
   
  })


