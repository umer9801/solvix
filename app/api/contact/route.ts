import { contactObject } from "@/lib/models/contactModel";
import { NextRequest, NextResponse } from "next/server"




function isContactData(object : unknown): object is contactObject{


 
    if(object === null || object === undefined  ){
            return false
    }

    if(typeof object !== "object"){
        return false
    }

    if(Array.isArray(object)){
        return false
    }

   
    const obj = object as Record<string , unknown>
     
    
    if(
        // !("name" in obj)
        // || !("email" in obj)
        // || !("phone" in obj)
        // || !("service" in obj)
        // ||!("message" in obj)
        // || !("company" in obj)
        (typeof obj.email !== "string" || obj.email.trim() === "")
        || (typeof obj.name !== "string" || obj.name.trim() === "")
        || (typeof obj.service !== "string" || obj.service.trim() === "") 
        || (typeof obj.company !== "string" || obj.company.trim() === "")
        || (typeof obj.phone !== "string"|| obj.phone.trim() === "")
        || (typeof obj.message !== "string" || obj.message.trim() === "")
        
    ){
        return false
    }



    return true
    

}




export async function POST(req: NextRequest){


    try{

        const contactData = await req.json();
        

        if(!isContactData(contactData)){
            return NextResponse.json({success: false, message: "Contact Data is Corrupted , Send Valid Contact Data"})
        }
  
        contactData


        console.log("contact Data :" , {contactData})


        const { name,  email ,company,  phone , service , message} = contactData


        



    //     if(  (typeof email !== "string")
    //     || (typeof name !== "string")
    //     || (typeof service !== "string")
    //     || (typeof company !== "string")
    //     || (typeof phone !== "string")
    //     || (typeof message !== "string")
        
    // ){

    //     return NextResponse.json({success: false , message :" Invalid Types, Send data with Valid Types"})
    // }
        



    
}
    catch(err: any){
        console.error("Error Saving Contact data in Database" , {
            message: err.message,
            stack: err.stack
        },
    )
       return NextResponse.json({success: false, message: "Server Error"},{status: 500})
    
    }
}