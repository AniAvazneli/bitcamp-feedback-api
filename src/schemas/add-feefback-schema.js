import Joi from "joi";

const feedbackSchema = async () => {
  return Joi.object({
    group: Joi.string().min(2).required().messages({
        "string.base": "group should be a string",
        "string.min": "group should include 2 characters or more",
        "any.required": "group is required",
    }),
    feedback: Joi.string().required().messages({
        "string.base": "feedback should be a string",
        "any.required": "feedback is required",
    }),
  });
};

export default feedbackSchema;