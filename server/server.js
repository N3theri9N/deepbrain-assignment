import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import db from './app/models/index.js'

import sac from './app/routes/sac.js'
import index from './app/routes/index.js'

import getResponse from "./app/lambdas/getResponse.js"
import applyDotenv from "./app/lambdas/applyDotenv.js"

async function startServer() {
    const app = express();
    const {mongoUri, port} = applyDotenv(dotenv)
    app.use(express.static('public'));
    app.use(express.urlencoded({extended : true}));
    app.use(express.json());
    app.use("/", index);
    app.use("/sac", sac);
    app.use(morgan('dev'))

    const mongooseOption = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    db.mongoose.connect(mongoUri, mongooseOption)
        .then(()=>{ console.log("MongoDB Connection Success")})
        .catch(err => { console.log("MongoDB Connection Failed"); process.exit();})

    app.all("*", function(_req, res){
        return getResponse().notFoundResponse(res, "페이지를 찾을 수 없습니다");
    });

    app.listen(port, () => {
        console.log("SERVER ON");
    });
}

startServer();