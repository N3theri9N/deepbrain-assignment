import User from "@/models/User";
import "@/models/dbConnect";

export default async (req, res) => {
    const { method } = req;
    const bcrypt = require('bcrypt');

    switch(method) {
        case "POST" :
            try {
                const user = await User.create({
                    ...req.body,
                    pw : bcrypt.hashSync(req.body.pw, 10)
                });
                return res.status(201).json({
                    success : true,
                    data : user
                });
            } catch (error) {
                return res.status(400).json({
                    success : false,
                    message : "가입이 실패했습니다."
                })
            }
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            return res
                .status(405)
                .json({ success: false })
                .end(`Method ${method} Not Allowed`);

    }


}