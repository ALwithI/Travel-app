"use server"

import { auth } from "@/auth";

async function geocodeAdress(adress:string){
    
}

export async function addLocation(formData: FormData , tripId: string) {
    const session = await auth();
    if(!session){
        throw new Error("Not authenticated")
    }
    const adress= formData.get("adresse")?.toString()
    if(!adress){
        throw new Error("Missing address")
    }
    

    return location;
}