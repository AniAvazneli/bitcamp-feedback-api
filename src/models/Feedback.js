import mongoose from "mongoose";

const { Schema } = mongoose;

const feedBackSchema = new Schema ({
    group: {
        type: Schema.Types.String,
        required: true,
    },
    feedback: {
        type: Schema.Types.String,
        required: true,
    }
})

const Feedback = mongoose.model('Feedback', feedBackSchema)

export default Feedback