const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require('dotenv');


const userRouter = require("./userRouter");
const authRouter = require("./authRouter");
const authenticator = require("./authenticator");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", authenticator, userRouter);
server.use("/api/auth", authRouter);

server.get("/", (req,res) => {
    res.json({api: "up"});
})

module.exports = server; 