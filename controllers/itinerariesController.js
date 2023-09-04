import Itinerary from "../models/Itinerary.js";
import itineraries from "../controllers/itinerariesController.js";

const itinerariesController = {
    getAllItineraries: async (request, response, next) =>{ 
        let allItineraries;
        let error = null
        let success = true;      
        try {
            allItineraries = await Itinerary.find()     
        } catch (err) {
            console.log(err)
            success = false;
            error = err;
            next(err)
        }
        response.json({
            response: allItineraries,
            success:true,
            error:null
        })
    },
    getOneItinerary: async (req, res, next) =>{ 
        console.log(req.params)
        const { id } = req.params
        //const city = cities.find(city => city.nombre == req.params.nombre )
        let Itinerary;
        let error = null
        let success = true;      
        try {
            Itinerary = await Itinerary.findById({id})     
        } catch (err) {
            console.log(err)
            success = false;
            error = err;
        }
        res.json({
            response: itineraries[0],
            success:true,
            error:null
        })
    },
    createOneItinerary:async (req, res, next)=>{
        console.log(req.body);
        try {
            //const newCity = new City(req.body)
            //await newCity.save()
            const Itinerary = await Itinerary.create(req.body)    
            console.log(Itinerary)
            res.json({
                response: Itinerary,
                success: true,
                error: null
            })
        } catch (error) {
            console.log(error)
            res.json({
                response: null,
                success: false,
                error: error
            })
        }
    },
    updateOneItinerary: async (req, res, next) =>{ 
        const { id } = req.params
        let Itinerary;
        let success = true;      
        try {
            Itinerary = await Itinerary.findOneAndUpdate({_id: id}, req.body, { new : true })
            res.json({
                response: Itinerary,
                success
            })     
        } catch (err) {
            success = false;
            next(err)
        }       
    },
    deleteOneItinerary: async (req, res, next) =>{ 
        const { id } = req.params
        let Itinerary;
        let success = true;      
        try {
            Itinerary = await Itinerary.findOneAndDelete({_id: id})
            res.json({
                response: Itinerary,
                success
            })     
        } catch (err) {
            success = false;
            next(err)
        }
    },
}


export default itinerariesController;

