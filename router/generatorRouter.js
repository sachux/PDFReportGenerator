import express from "express";
import ReportService from "../service/ReportService.js";

const router = express.Router();

router.get('/report', function(req, res) { 
    const reportService = new ReportService();
    const data = {
        "projectName" : "Road Widening",
        "announcementDate" : "2022-02-05",
        "sponsor" : "Goverment of India",
        "location" : "WhiteField, Bangalore"
    }
    res.status(200).send(reportService.createReport(data, "ReportTemplate.ejs"));
});

export default router;