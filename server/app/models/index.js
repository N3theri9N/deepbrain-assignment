import dotenv from 'dotenv';
import mongoose from 'mongoose';
import SacModel from "./Sac.js"

const db = {
    mongoose : mongoose,
    url : dotenv.MONGO_URI,
    Sac : new SacModel(mongoose)
}

export default db;