import { connectionS } from "@/library/db";
import { Prod } from "@/library/model/prod";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function GET(requ){
    let ams = [];
    // let success = true;
    try{
        await mongoose.connect(connectionS)
        ams = await Prod.find()
    }catch(err)
    {
        ams = {res:"error"}
        // success=false;
    }
    return NextResponse.json({res:ams},{success:true})
}
export async function POST(requs){
    const payload = await requs.json()
    await mongoose.connect(connectionS)
    let ans = new Prod(payload)
    let res = await ans.save()
    return NextResponse.json({res,success:true})
}