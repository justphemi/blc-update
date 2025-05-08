import jwt from 'jsonwebtoken'

const adminCheck = async (req, res, next) => {

    try{
        const {token} = req.headers

        if(!token){
            return res.json({success:false, message: "Unauthorised!"})
        }

        const token_code = jwt.verify(token, process.env.JWT_SECRET)
        
        if(token_code !== process.env.ADMIN_USER + process.env.ADMIN_CODE){
            return res.json({success:false, message: "Unauthorised!!"})            
        }

        next()

    } catch (err){
        console.log(err)
        res.json({success:false, message: err.message})
    }

}

export default adminCheck