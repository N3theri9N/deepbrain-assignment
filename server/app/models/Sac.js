import dotenv from 'dotenv';
import applyDotenv from "../lambdas/applyDotenv.js";

export default function SacModel(mongoose){
    const { mongoUri } = applyDotenv(dotenv);

    const sacSchema = mongoose.Schema({
        place : String,
        title : String,
        type : String,
        startDate : String,
        endDate : String,
        audience : String
    });

    return mongoose.model("Sac", sacSchema);
}