// 네이밍 커넥션으로 이 객체는 대문자로 시작한다.
// 클라우드 환경에서 사용한다면 이렇게 기재한다.
import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        trim: true,
    },
    address: {
        type: String,
        required: [true, "Address is required!"],
        trim: true,
    },
    phone: {
        type: String,
        required: [true, "Phone is required!"],
        trim: true,
    },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Employee ||
mongoose.model("Employee", EmployeeSchema);