
const jwt = require('jsonwebtoken');

export const createJWToken = (user: any) =>{
    //console.log(user)
    return jwt.sign({user},'MELOHAARETZKEVODCHA',{
        expiresIn: '1h'
    })
    
    
}






