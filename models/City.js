import { Schema, model, Types } from "mongoose";

let collection = "cities"
const citySchema = Schema({
    city: { type: String, required: true },
    country: { type: String, required: true },
    image: { type: String, required: true },
    currency: { type: String, required: true },
    language: { type: String, required: true },
    population: { type: Number, required: true },
    dishes: { type: String, required: true },
    interest: { type: String, defaul:"edit later" },
    admin_id: { type:Types.ObjectId, required: true, ref:'users' }
},{
    timestamps: true
})


const City = model(collection, citySchema)

export default City