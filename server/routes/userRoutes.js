import express from "express";
import { veriifyEmailController } from "../controller/user/auth/verifyEmailController.js";
import { verifyOtpController } from "../controller/user/auth/verifyOtpController.js";
const router = express.Router();

router.post("/verifyEmail", veriifyEmailController);
router.post("/verifyOtp", verifyOtpController);
export default router;
