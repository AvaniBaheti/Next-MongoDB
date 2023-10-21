import mongoose from "mongoose"
const prodModel = new mongoose.Schema({
    name:String,
    price:String,
    company:String,
    color:String,
    category:String
})
export const Prod = mongoose.models.prods || mongoose.model("prods",prodModel)