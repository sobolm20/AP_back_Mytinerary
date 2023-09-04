import { Router } from "express";
import itinerariesController from "../controllers/itinerariesController.js";
const itineraryRouter = Router ()
const { getAllItineraries, getOneItinerary , createOneItinerary , updateOneItinerary , deleteOneItinerary } = itinerariesController


itineraryRouter.get('/', getAllItineraries )
itineraryRouter.post('/', createOneItinerary )
itineraryRouter.get('/:id', getOneItinerary )
itineraryRouter.put('/:id', updateOneItinerary )
itineraryRouter.delete('/:id', deleteOneItinerary )

export default itineraryRouter