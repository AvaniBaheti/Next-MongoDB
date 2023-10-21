"use client"
import { useState } from "react"

import "./../syyle.css"
export default function Page(){

    const [name,seName]=useState("");
    const [price,sePrice]=useState("");
    const [company,seCompany]=useState("");
    const [color,seColor]=useState("");

    const [category,seCategory]=useState("");
    const addProd=async()=>{
        let res = await fetch("http://localhost:3000/api/prods",{
            method:"POST",
            body:JSON.stringify({name,price,color,company,category})

        })

        res=await res.json();
        if(res.success==true){
            alert("added all")
        }
        else{
            alert("add again all")
        }
    }
    return  (
        <div>
            <h1 className="input">Add Prod</h1>
            <input  type="text" value={name} onChange={(e)=>seName(e.target.value)}className="input" placeholder="Enter Producy Name"/>
            <input  type="text" value={price} onChange={(e)=>sePrice(e.target.value)} className="input" placeholder="Enter Price"/>
            
            <input  type="text" value={color} onChange={(e)=>seColor(e.target.value)} className="input" placeholder="Enter Color"/>
            <input  type="text" value={company} onChange={(e)=>seCompany(e.target.value)} className="input" placeholder="Enter Name of Company"/>
            <input  type="text" value={category} onChange={(e)=>seCategory(e.target.value)} className="input" placeholder="Enter Cayegory"/>
            <button className="byn" onClick={addProd}>Click</button>
        </div>
    )
    }