const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const upload = require("../middlewares/file.middleware");


const {
    generateInterviewReportController,
    getInterviewReportByIdController,
    getAllInterviewReportsController,
    generateResumePdfController
} = require("../controllers/interview.controller");

const interviewRouter = express.Router();

/**
 * @route POST /api/interview/
 */
interviewRouter.post("/", authMiddleware.authUser, upload.single("resume"), generateInterviewReportController);

/**
 * @route GET /api/interview/report/:interviewId
 */
interviewRouter.get("/report/:interviewId", authMiddleware.authUser, getInterviewReportByIdController);

/**
 * @route GET /api/interview/
 */
interviewRouter.get("/", authMiddleware.authUser, getAllInterviewReportsController);

/**
 * @route POST /api/interview/resume/pdf/:interviewReportId
 */
interviewRouter.post("/resume/pdf/:interviewReportId", authMiddleware.authUser, generateResumePdfController);

module.exports = interviewRouter;