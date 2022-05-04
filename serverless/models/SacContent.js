import mongoose from "mongoose";

const SacContentSchema = new mongoose.Schema({

    title : {
        type: String,
        required : [true, "title is required!"],
        trim : true
    },
    place : {
        type : String
    },
    type : {
        type: String
    },
    startDate : {
        type: String
    },
    endDate : {
        type: String
    },
    audience : {
        type: String,
    },
});

export default mongoose.models.SacContent ||
mongoose.model("SacContent", SacContentSchema);
