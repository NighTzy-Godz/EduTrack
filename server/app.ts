import express from 'express'

import studentRoutes from './interface/routes/StudentRoutes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/student', studentRoutes)

export default app


