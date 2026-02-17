import mongoose from "mongoose"

export interface contactObject {
    name: string,
    email: string , 
    phone: string ,
    service:string,
    message: string,
    company?: string
}

const contactSchema = new mongoose.Schema({
name: {type:String , required: true , trim: true , lowercase: true },
email: {type:String , required: true , trim : true  , lowercase: true},
phone: {type:String ,required: true, trim : true , lowercase: true},
service: { type :String ,required: true, trim: true , lowercase: true},
message: {type : String , trim : true },
company: {type :String, trim : true , lowercase: true}
})

const contactModel = mongoose.model<contactObject>("Contact" , contactSchema);

export default contactModel

