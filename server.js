import express from "express";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Middleware
app.use(express.json()); // Parse JSON body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(cors({ origin: "http://localhost:5174" })); // Allow frontend requests

// Multer for file uploads
const upload = multer({ dest: "uploads/" });

// Handle form submission
app.post("/submit-form", upload.single("documents"), async (req, res) => {
  const { firstName, lastName, email, contactNumber, additionalDetails } =
    req.body;
  const file = req.file;

  // Nodemailer setup
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // Your email
      pass: process.env.EMAIL_PASSWORD, // Your email password or app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: "recipient@example.com", // Change this to the recipient's email
    subject: "New Consultation Booking",
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Contact Number: ${contactNumber}
      Additional Details: ${additionalDetails}
    `,
    attachments: file
      ? [
          {
            filename: file.originalname,
            path: file.path,
          },
        ]
      : [],
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Email sending failed." });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
