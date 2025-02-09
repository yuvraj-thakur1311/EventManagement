import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI , {dbName : "MERN_STACK_EVENT_MANAGEMENT_PLATFORM"})
    .then(() => {
        console.log("Connected to database..");
    })
    .catch((err) => {
        console.log("Some error occured while connecting with database..");
    })
}