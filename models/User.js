import { model, Schema } from "mongoose"

let collection = "users"
let schema = new Schema({
    name: { type:String, required:true },
    lastName: { type:String },
    mail: { type:String, required:true, unique:true },
    photo: { type:String, default:"https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29uYWplfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" },
    password: { type:String, required:true },
    country: { type:String, required:true }
})

let User = model(collection, schema)
export default User