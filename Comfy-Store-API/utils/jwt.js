require('dotenv').config();
const jwt=require('jsonwebtoken');

const createJWT =({payload}) =>{
    const token= jwt.sign(payload,process.env.JWT_SECRET);
    return token;
}

const attachCookiesToResponse =({res,user}) =>{
    const token = createJWT({payload:user});

    const oneDay = 1000*60*60*24;
    res.cookie('token',token,{
        httpOnly:true,
        expires:new Date(Date.now()+oneDay),
        // secure: process.env.NODE_ENV === 'production',
        signed:true,
        sameSite:'none',
        secure:true,
    });
    return token;
}

const isTokenValid = (token)=>jwt.verify(token,process.env.JWT_SECRET);

module.exports={
    createJWT,
    isTokenValid,
    attachCookiesToResponse,
}