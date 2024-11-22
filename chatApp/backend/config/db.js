import mongoose from "mongoose";

export const connection = ()=>{
    mongoose.connect(process.env.MONGODB_URI, {
        dbName: "chatApplication"
    }).then(()=>{
        console.log("Database Connected Succesfully");
    }).catch(err=>{
        console.log("Error Occured while connection to Database", err);
    })
}