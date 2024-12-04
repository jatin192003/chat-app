import { User } from "../models/user.model.js";
import { asyncHandler } from "../middlewares/asyncHandler.js"
import ErrorHandler from "../middlewares/error.js";
import {sendToken} from "../utils/jwtToken.js"

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
        return res.status(200).json({
            success: true,
            message: "user registered successfully"
        })
    } catch (error) {
        console.log(error);
    }
})

export const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorHandler("email and password both are required", 400));
    }

    const user = await User.findOne({ email })

    if (!user) {
        return next(new ErrorHandler("email not found", 400));
    }

    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password.", 400));
    }

    sendToken(user, 200, res, "User logged in successfully.");
})

export const logout = asyncHandler(async (req, res, next) => {
    res
        .status(200)
        .cookie("token", "", {
            expires: new Date(Date.now()),
            httpOnly: true,
        })
        .json({
            success: true,
            message: "Logged out successfully.",
        });
});

export const getUser = asyncHandler(async (req, res, next) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        user,
    });
});

export const getOtherUser = asyncHandler(async (req,res,next)=>{
    const user = req.user;
    const loggedInUserID = user.id;
    const otherUsers = await User.find({_id: {$ne: loggedInUserID}}).select("-password");
    return res.status(200).json(otherUsers);
})