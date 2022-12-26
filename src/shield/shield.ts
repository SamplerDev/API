import { query } from "express";
import { shield } from "graphql-shield";
import { Query } from "typeorm/driver/Query";
import { Context } from "vm";
import { isAdmin } from "./rules";
import * as rules from './rules'
const jwt = require('jsonwebtoken');


//devuelve el token decodificado que viene del lado del
export const decodedToken = (context:Context) =>{

    const authorization:string= context.authorization
    const token:string = authorization.replace('Bearer ','')
    const tokenverificado = jwt.verify(token,'MELOHAARETZKEVODCHA')
   
    return tokenverificado
    
}


export const permissions = shield({
    RootQuery: {
        getViajeID: rules.isAdmin,
        getUserMail: rules.isAdmin,
        getAllUser: rules.isAdmin,
        getUserID:rules.isAdmin
        

    },
    Mutation: {
        createViaje: rules.isAdmin,
        deleteViaje: rules.isAdmin,
        updateViaje: rules.isAdmin,
        createUser: rules.isAdmin,
        updateUser: rules.isAdmin,
        deleteUser: rules.isAdmin,
      
    }
  })