  import {Message} from "../models/messageSchema.js";

  export const sendMessage = async (req , res) => {

    try {
        const {name , email , subject , message} = req.body;
        if(!name || !email || !subject || !message){
            return res.status(400).json({
                success : false,
                message : "All fields are required..",
            })
        }
        await Message.create({name , email , subject , message});
        res.status(200).json({
            success : true,
            message : "Message sent Successfully..",
        })
    } catch (error) {
        if(error.name === "ValidationError"){
            let errorMessaage = "";
            if(error.errors.name){
                errorMessaage += error.errors.name.message + " ";
            }

            if(error.errors.email){
                errorMessaage += error.errors.email.message + " ";
            }

            if(error.errors.subject){
                errorMessaage += error.errors.subject.message + " ";
            }

            if(error.errors.message){
                errorMessaage += error.errors.message.message + " ";
            }
            return res.status(400).json({
                success:false,
                message:errorMessaage,
            });
        }
        return res.status(500).json({
            success : false,
            message : "Unknown Error Occured..",
        })
    }
  }