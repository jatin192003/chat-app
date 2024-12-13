import { asyncHandler } from "../middlewares/asyncHandler.js";
import ErrorHandler from "../middlewares/error.js";
import { Conversation } from "../models/conversation.model.js";
import { Message } from "../models/message.model.js";

export const sendMessage = asyncHandler(async(req, res, next)=>{
    const user = req.user
    console.log(user);
    const senderId = user.id
    const receiverId = req.params.id
    const {message} = req.body

    if (!message){
        return next(new ErrorHandler("message is required", 400))
    }
    
    
    let gotConversation = await Conversation.findOne({
        participants:{$all : [senderId, receiverId]},
    });

    if (!gotConversation){
        gotConversation = await Conversation.create({
            participants:[senderId, receiverId]
        })
    }

    const newMessage = await Message.create({
        senderId,
        receiverId,
        message
    })

    if (newMessage){
        gotConversation.messages.push(newMessage._id)
    }
    await gotConversation.save();

    return res.status(200).json({
        success:true,
        message:"Message Sent Successfully"
    })
})

export const getMessage = asyncHandler(async (req,res,next)=>{
    const receiverId = req.params.id
    const senderId = req.user.id
    const conversation = await Conversation.findOne({
        participants:{$all : [senderId, receiverId]}
    }).populate("messages")
    
    return res.status(200).json(conversation.messages)
    
})