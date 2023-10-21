import { connectionS } from "@/library/db";
import { Prod } from "@/library/model/prod";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(requ,con){
    console.log(con);
    const prodId=con.params.prodid;
    const fil = {_id:prodId}
    const payload=await requ.json()
    console.log(payload)
    await mongoose.connect(connectionS)
    const res=await Prod.findOneAndUpdate(fil,payload);
    return NextResponse.json({res,success:true})
}