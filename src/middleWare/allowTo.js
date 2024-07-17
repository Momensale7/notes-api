const allowTo =(...arr)=>{
    return (req,res,next)=>{
        if(arr.includes(req.user.role)){
            next()
        }
        else return res.status(401).json({message:"not authorized"})
    }
}
export default allowTo