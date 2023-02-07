import Feedback from "../models/Feedback.js";
import feedbackSchema from "../schemas/add-feefback-schema.js";

export const getAllFeedbacks = async (req, res) => {
  const data = await Feedback.find();
  return res.json(data);
};

export const createFeedback = async (req, res) => {
  const { body } = req;

  const validator = await feedbackSchema(body);
  const { value, error } = validator.validate(body);

  if (error) {
    return res.status(401).json(error.details);
  }

  const { group, feedback } = value;

  await Feedback.create({
    group, feedback 
  });

  return res.status(201).json({ message: "Feedback created successfully" });
};
