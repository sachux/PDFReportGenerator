import express from "express";

const router = express.Router();

router.get('/report', function(req, res) { res.status(200).send({"something":true});});

export default router;