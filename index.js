import 'dotenv/config.js'
import express from "express"
import indexRouter from "./router/indexRouter.js"
import cors from 'cors'
import './config/database.js'

const server = express ()

server.use(cors())
server.use(express.json())
//server.use(express.urlencoded())

server.use('/api', indexRouter)


server.get('/', (request, response, next) =>{ 
    response.send('bienvenido a mi servidor')
})
server.post('/', (request, response, next) =>{ 
    response.send('bienvenido a mi servidor')
})
server.put('/', (request, response, next) =>{ 
    response.send('bienvenido a mi servidor')
})
server.delete('/', (request, response, next) =>{ 
    response.send('bienvenido a mi servidor')
})


server.listen (process.env['PORT'], () => { console.log('servidor corriendo en puerto' + process.env['PORT']) })
//PORT
//process.env guarda las config de las variab de entorno 
// se config con el modulo dotenv
