import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, "id is required!"],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        trim: true,
    },
    pw: {
        type: String,
        required: [true, "password is required!"],
        trim: true,
    },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User ||
mongoose.model("User", UserSchema);