import express from "express";
import {getAllFeedbacks, createFeedback} from '../controllers/feedbackController.js'

const feedbackRouter = express.Router();

feedbackRouter.get("/feedbacks", getAllFeedbacks);
feedbackRouter.post("/feedbacks", createFeedback);
export default feedbackRouter;