import mongoose from 'mongoose'

const connectToStore = async () => {
    
    
    mongoose.connection.on('connected', () => {
        console.log('Database Connected')
    })

    await mongoose.connect(`${process.env.MONGO_URI}/${process.env.MONGO_ROUTE}`)
    
}

export default connectToStore