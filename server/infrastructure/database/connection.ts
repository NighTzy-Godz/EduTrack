import mongoose from "mongoose"

const DB_URL = "mongodb://localhost:27017/edutrack"

export const connectToDatabase = async() =>{
    try {
        await mongoose.connect(DB_URL)
        console.log('Connected to the Database')
    } catch (error) {
        console.log('Error on connection with the database - ', error)
    }
}

