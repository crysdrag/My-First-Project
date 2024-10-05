import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine.js";  // lưu ý thêm đuôi `.js` nếu sử dụng ES6
import initWebRoutes from "./route/web.js";
import dotenv from 'dotenv';
import connectDB from "./config/connectDB.cjs";

dotenv.config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

let PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("checker port: " + PORT);
});
