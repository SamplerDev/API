
import {NextFunction, Request,Response} from 'express'
const jwt =require('jsonwebtoken')
export const authenticate = (req: Request, res: Response , next: NextFunction) =>{
     const token= req.headers.authorization?.split(" ")[1];
    try{
    
   
    const verified=jwt.verify(token,'MELOHAARETZKEVODCHA',)
     req.user = verified.user
     //console.log(req.user)
    
   
    next()

    }
    catch(error){
    console.log(error)
       
    }
    

}