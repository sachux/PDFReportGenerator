import express from "express";
import ReportService from "../service/ReportService.js";

const router = express.Router();

router.get('/report', async function(req, res) { 
    const reportService = new ReportService();
    const data = {
        data :  {
        "projectName" : "Road Widening",
        "announcementDate" : "2022-02-05",
        "sponsor" : "Goverment of India",
        "location" : "WhiteField, Bangalore"
    }};
    const pdf = await reportService.createReport(data, "ReportTemplate.ejs");
    res.status(200).send(pdf);
});

export default router;