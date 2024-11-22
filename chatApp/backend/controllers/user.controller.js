import { User } from "../models/user.model.js";
import { asyncHandler } from "../middlewares/asyncHandler.js"
import ErrorHandler from "../middlewares/error.js";

export const register = asyncHandler(async (req,res,next)=>{
    try {
        const {fullName, email, username, password, confirmPassword, gender} = req.body;
        if (!fullName || !email || !username || !password || !confirmPassword || !gender){
            return next(new ErrorHandler("all fields are required while registering user", 400))
        }
        if (password !== confirmPassword ){
            return next(new ErrorHandler("password must match", 400))
        }
        const user = await User.findOne({username});
        if (user){
            return next(new ErrorHandler("username already taken", 400))
        }
        const emailID = await User.findOne({email});
        if (emailID){
            return next(new ErrorHandler("email already exists", 400))
        }
        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`
        await User.create({fullName, username, email, password, gender,profilePhoto: gender==="male" ? maleProfilePhoto: femaleProfilePhoto })
        
    } catch (error) {
        console.log(error);
    }
})