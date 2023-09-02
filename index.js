import express from "express";
import path from "path";
import moment from "moment";
import userData from "./Members.js";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());


const myMiddleware = (req, res, next) => {
    console.log(`${req.protocol}://${req.get("host")}${req.originalUrl} ${moment().format()}`);
    next();
}

app.use(myMiddleware);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/data/users", (reg, res) => {
    res.json(userData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});