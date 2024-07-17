import jwt from "jsonwebtoken"
const verifyTokken=(req,res,next)=>{
    const {token} =req.headers
    console.log(token);
    jwt.verify(token,'mosfet',async (err,decoded)=>{
        if(err) return res.status(404).json({message:"error",err})
            console.log(decoded)
        req.user=decoded
        console.log(req.user)
        next()
    })
}

export default verifyTokken