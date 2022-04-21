const express = require('express');
const fs = require('fs');
const cors = require('cors')
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.get('/', (req, res) => {
    res.send('hello node');
})

app.get("/sac/:startIndex", cors(corsOptions) ,(req, res) => {
    fs.readFile("./contents/csv/SeoulArtCenter2018.csv", "utf-8", (err, data) => {
        let SACList = data.split("\r\n");
        const startIndex = parseInt(req.params.startIndex)
        const endIndex = startIndex + 20;
        res.json(SACList.slice(startIndex, endIndex));
    });
});

app.listen(4000, () => console.log('4000번 포트에서 대기중'));
