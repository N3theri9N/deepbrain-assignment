const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    res.send('hello node');
})

app.get("/sac/:startIndex", (req, res) => {
    fs.readFile("./contents/csv/SeoulArtCenter2018.csv", "utf-8", (err, data) => {
        let SACList = data.split("\r\n");
        const startIndex = parseInt(req.params.startIndex)
        const endIndex = startIndex + 20;
        res.json(SACList.slice(startIndex, endIndex));
    });
});

app.listen(4000, () => console.log('4000번 포트에서 대기중'));
