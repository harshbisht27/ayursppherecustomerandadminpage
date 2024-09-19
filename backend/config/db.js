import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://harshbisht180:1tzzKl63HXbUVoLi@cluster0.soiye.mongodb.net/veda01').then(()=>console.log("DB Connected"))
}


