// Import required modules
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

/*  CONFIGURATION  */

// Set up file paths and configure environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

// Initialize Express app
const app = express();

// Middleware setup
app.use(express.json()); // Parse incoming JSON requests
app.use(helmet()); // Secure HTTP headers
app.use(helmet.crossOriginEmbedderPolicy({ policy: "cross-origin" })); // Configure cross-origin embedding policy
app.use(morgan("common")); // HTTP request logger
app.use(bodyParser.json({ limit: "30mb", extended: true })); // Parse request bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing

/* 
   Serve static assets from the 'public/assets' directory under the '/assets' endpoint.
   Note: In production, consider using a proper storage solution (e.g., S3) for assets.
*/
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));