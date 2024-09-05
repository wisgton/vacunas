import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db'
import authRoutes from './routes/authRoutes'
import projectRoutes from './routes/projectRoutes'



dotenv.config()
connectDB()


const app = express()

app.use(express.json())
//Routes o rutas    

app.use('/api/auth', authRoutes)
app.use('/api/projects', projectRoutes)


export default app
