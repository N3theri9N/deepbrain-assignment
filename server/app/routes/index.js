import express from 'express'
const indexRouter = express.Router();

indexRouter.route('/').get(function(_req, res) {
    res.json({"now time : ": new Date().toLocaleString()})
});

export default indexRouter;
