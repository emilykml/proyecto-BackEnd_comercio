import express from "express";
import cors from 'cors'
import db from "./database/db.js"
import productRouter from './routes/productRoutes.js'
import brandRouter from './routes/brandRouter.js'

export const app = express()
app.get('/', (req , res) =>{
    res.send('<h1>Hola Backend</h1>')
})

app.use(cors())
app.use(express.json())
app.use('/product', productRouter)
app.use('/brand', brandRouter)


try{
    await db.authenticate()
        console.log('conected to database')
    }catch(error){
        console.log('error: ${error}')
    }

export const server = app.listen(8000,() =>{
console.log('🚀server up in http://localhost:8000/')
})