import { emailExist } from "../../../models/user/auth/emailExist.js";
import { tempStorage } from "../../../models/user/auth/verifyEmail.js";
import { generateOtp } from "../../../utils/generateOtp.js";
import { hashPassword } from "../../../utils/hashPassword.js";
import transporter from "../../../utils/nodemailer.js";

export async function veriifyEmailController(req, res) {
  try {
    const { fullname, gender, country, email, password } = req.body;
    if (!fullname || !gender || !country || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "all fields are required!",
      });
    }
    const isEmailExist = await emailExist(email);

    if (isEmailExist.length > 0) {
      return res.status(400).json({
        success: false,
        message: "email already registered, please try another one!",
      });
    }
    const otp = generateOtp();
    const hashedPassword = await hashPassword(password);

    const tempData = {
      fullname,
      gender,
      country,
      email,
      password: hashedPassword,
      otp,
    };
    await tempStorage(email, tempData);

    await transporter.sendMail({
      from: '"Community Platform" <bicojayvee4@gmail.com>',
      to: email,
      subject: "this is your otp",
      text: "Hello world?", // plain‑text body
      html: `hello ${email}, this is your ${otp} it will expires in 5 minutes`, // HTML body
    });

    return res.status(201).json({
      success: true,
      message: "An OTP has been sent to your gmail, please check your email!",
      otp: otp,
    });
  } catch (error) {
    console.error("server error, verifyEmail", error);
  }
}
