import "reflect-metadata"

import express, { Request, Response, NextFunction } from "express"
import "express-async-errors"

import routes from "./routes"
import uploadConfig from "@config/upload"
import AppError from "@shared/errors/AppError"

import cors from "cors"
import bodyParser from "body-parser"

import "@shared/infra/typeorm"
import "@shared/container"

const app = express()

const corsOpts = {
	origin: "*",

	methods: ["GET", "POST"],

	allowedHeaders: ["*"],
}

app.use(cors(corsOpts))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json())
app.use("/files", express.static(uploadConfig.tmpFolder))
app.use(routes)

app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
	res.setHeader("Access-Control-Allow-Headers", "Content-Type")
	res.setHeader("Access-Control-Allow-Credentials", "true")
	next()
})

// app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
// 	if (err instanceof AppError) {
// 		return response.status(err.statusCode).json({
// 			status: "error",
// 			message: err.message,
// 		})
// 	}

// 	console.error(err)

// 	return response.status(500).json({
// 		status: "error",
// 		message: "Internal Server Error",
// 	})
// })

app.listen(3333, () => {
	console.log("Server started on port 3333!")
})
