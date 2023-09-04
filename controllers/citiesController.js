import City from "../models/City.js";
import cities from "../cities.js";

const citiesController = {
    getAllCities: async (request, response, next) =>{ 
        let allCities;
        let error = null
        let success = true;      
        try {
            allCities = await City.find()     
        } catch (err) {
            console.log(err)
            success = false;
            error = err;
            next(err)
        }
        response.json({
            response: allCities,
            success:true,
            error:null
        })
    },
    getOneCity: async (req, res, next) =>{ 
        console.log(req.params)
        const { id } = req.params
        //const city = cities.find(city => city.nombre == req.params.nombre )
        let city;
        let error = null
        let success = true;      
        try {
            city = await City.findById({id})     
        } catch (err) {
            console.log(err)
            success = false;
            error = err;
        }
        res.json({
            response: cities[0],
            success:true,
            error:null
        })
    },
    createOneCity:async (req, res, next)=>{
        console.log(req.body);
        try {
            //const newCity = new City(req.body)
            //await newCity.save()
            const city = await City.create(req.body)    
            console.log(city)
            res.json({
                response: city,
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
    updateOneCity: async (req, res, next) =>{ 
        const { id } = req.params
        let city;
        let success = true;      
        try {
            city = await City.findOneAndUpdate({_id: id}, req.body, { new : true })
            res.json({
                response: city,
                success
            })     
        } catch (err) {
            success = false;
            next(err)
        }       
    },
    deleteOneCity: async (req, res, next) =>{ 
        const { id } = req.params
        let city;
        let success = true;      
        try {
            city = await City.findOneAndDelete({_id: id})
            res.json({
                response: city,
                success
            })     
        } catch (err) {
            success = false;
            next(err)
        }
    },
    getCarousel: async (req, res, next) =>{      
        try {
            const all = await City.find({}, 'image city').limit(12)
            let count = await City.countDocuments()
            return res.status(200).json({
                success: true,
                message: 'cities to show on carousel',
                city_carousel: all,
                count
            })     
        } catch (err) {
            success = false;
            next(err)
        }
    }
}


export default citiesController;