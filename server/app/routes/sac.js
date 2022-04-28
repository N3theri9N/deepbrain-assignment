import express from 'express'
import cors from 'cors'
import SacService from "../services/sac.js";

const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors());
app.use(function (_req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

app.get('/sacroutetest', cors(corsOptions), (req, res) => {
    console.log("경로 확인");
    res.status(200).send("OK");
})

app.post('/registSac', (req, res) => {
    SacService().regist(req, res);
})

app.get('/getSac', cors(corsOptions), (req, res) => {
    SacService().getSac(req, res);
})

app.get('/getSac/:id', cors(corsOptions), (req, res) => {
    SacService().getSacById(req.params.id, res);
})

app.post('/updateSac', cors(corsOptions), (req, res) => {
    SacService().update(req, res);
})

app.post('/deleteSac/:id', cors(corsOptions), (req, res) => {
    SacService().delete(req.params.id, res);
})

export default app