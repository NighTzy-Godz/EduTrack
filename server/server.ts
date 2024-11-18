import app from "./app"
import { connectToDatabase } from "./infrastructure/database/connection"
const PORT = 8080

connectToDatabase().then(() =>{
    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
}).catch(err =>   console.log('Error to start the server due to DB connection issue - ', err))