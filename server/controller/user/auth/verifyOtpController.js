import redis from "../../../config/redis.js";
import { createUser } from "../../../models/user/auth/createUser.js";
export async function verifyOtpController(req, res) {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: "all fields are required!",
      });
    }
    const tempData = await redis.get(`tempUser:${email}`);
    if (!tempData) {
      return res.status(400).json({
        success: false,
        message: "expired user or email not found",
      });
    }
    if (tempData.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "invalid otp,please try another one!",
      });
    }
    await createUser(tempData);
    await redis.del(tempData);
    return res.status(201).json({
      success: true,
      message: "sign Up successfully",
    });
  } catch (error) {
    console.error("server error,error verifying Otp", error);
  }
}
