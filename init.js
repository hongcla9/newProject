import "./db"
import app from "./app";
import dotenv from "dotenv";
import "./models/Video";
import "./models/Comment";
import "./models/User";
dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);

// model - is data v - how does the data look c funciont that loooks for data (MVC)



