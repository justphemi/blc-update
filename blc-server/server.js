import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectToStore from './config/mongodb.js'
import connectToCloud from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'

const app = express()
const app_port = process.env.PORT || 8043
connectToStore()
connectToCloud()

app.use(express.json())
app.use(cors())

app.use(`${process.env.API_ENDPOINT_USER}`, userRouter)
app.use(`${process.env.API_ENDPOINT_PRODUCT}`, productRouter)

app.get('/', (req, res) => {
    res.send('Welcome to the server')
})

app.listen(app_port, () => {
    console.log('Listening on port', app_port)
})