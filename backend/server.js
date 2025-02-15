import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config();

// Convert import.meta.url to __dirname (ESM workaround)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;
const csvFilePath = path.join(
  __dirname,
  process.env.CSV_FILE_PATH || "leads.csv"
);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Function to append data to CSV
const appendToCSV = (data) => {
  const csvRow = `${data.fullName},${data.number},${data.email},${
    data.company || ""
  },${data.designation || ""},${data.comments || ""}\n`;

  if (!fs.existsSync(csvFilePath)) {
    fs.writeFileSync(
      csvFilePath,
      "Full Name,Number,Email,Company,Designation,Comments\n"
    );
  }
  fs.appendFileSync(csvFilePath, csvRow);
};

// API Endpoint for lead submissions
app.post("/submit-lead", (req, res) => {
  const { fullName, number, email, company, designation, comments } = req.body;

  if (!fullName || !number || !email) {
    return res
      .status(400)
      .json({ message: "Full Name, Number, and Email are required" });
  }
  appendToCSV({ fullName, number, email, company, designation, comments });
  res.json({ message: "Feedback submitted successfully!" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
