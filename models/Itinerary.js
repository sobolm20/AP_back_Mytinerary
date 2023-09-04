import { Schema, model, Types } from "mongoose";

let collection = "itineraries"
const citySchema = Schema({
    name: { type: String, required: true },
    city_id: { type:Types.ObjectId, required: true, ref:'cities' },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    tags: { type: String, required: true },
    image: { type: String, required: true },
},{
    timestamps: true
})

const Itinerary = model(collection, citySchema)

export default Itinerary