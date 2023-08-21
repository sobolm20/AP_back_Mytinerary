import { Router } from "express";
import cityRouter from "./cityRouter.js";
const indexRouter = Router ()


indexRouter.get('/', (request, response, next) =>{ 
    response.send('bienvenido a mi servidor en /api')
})

indexRouter.use('/cities', cityRouter)


export default indexRouter
