import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js"

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

const signinControl = async (req, res) => {
    try {
        
        const {email, password} = req.body
        const user = await userModel.findOne({email})

        if(!user){
            return res.json({success:false, message: "Account does not exist for this email!"})
        }

        const isAuth = await bcrypt.compare(password, user.password)

        if(isAuth){
            const token = createToken(user._id)
            res.json({success:true, token})
        }else{
            res.json({success: false, message: "Invalid credentials!"})
        }

    } catch (error) {
        console.log("Signin failed: ", error)
        res.json({success:false, message: error.message})        
    }
}


const signupControl = async (req, res) => {

    try {
        const {name, email, password} = req.body
        const exists = await userModel.findOne({email})

        if(exists){
            return res.json({success:false, message: "This email is associated with another account!"})
        }

        if(!validator.isEmail(email)){
            return res.json({success:false, message: "Invalid email!"})
        } 

        if(password.length < 2){
            return res.json({success:false, message: "Password is too weak!"})        
        }

        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(password, salt)

        const newUser = new userModel({name, email, password:hashed})

        const user = await newUser.save()
        const token = createToken(user._id)

        res.json({success:true, token})
        
    } catch (error) {
        console.log("Signup failed: ", error)
        res.json({success:false, message: error.message})
    }

    
}


const adminControl = async (req, res) => {

    try {
        const {email, password} = req.body

        if(email === process.env.ADMIN_USER && password === process.env.ADMIN_CODE){
            const token = jwt.sign(email+password, process.env.JWT_SECRET)

            res.json({success: true, token})
        }else {
            res.json({success: false, message: "Access denied!"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }

}


export {signinControl, signupControl, adminControl}



