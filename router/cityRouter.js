import { Router } from "express";
import citiesController from "../controllers/citiesController.js";
const cityRouter = Router ()
const { getAllCities, getOneCity , createOneCity , updateOneCity , deleteOneCity, getCarousel } = citiesController


cityRouter.get('/', getAllCities )
cityRouter.post('/', createOneCity )
cityRouter.get('/:id', getOneCity )
cityRouter.put('/:id', updateOneCity )
cityRouter.delete('/:id', deleteOneCity )
cityRouter.get('/carousel', getCarousel )

export default cityRouter