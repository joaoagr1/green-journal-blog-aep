import express from 'express'
import mongoose from 'mongoose'
import  router  from './routes'
import cors from 'cors'; 



class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middleware()
        this.database()
        this.routes()
    }

    public middleware(): void {
        this.express.use(express.json())
        this.express.use(cors()); 
    }

    public async database() {
        try {
            mongoose.set("strictQuery", true)
            await mongoose.connect('mongodb://0.0.0.0:27017/aep-green-blog')
            console.log("Connect database sucess")
        } catch (error) {
            console.error('Cannot connect to database, error:', error)
        }
    }

    public routes(): void {
        this.express.use(router)
    }
}

export default new App().express