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
import { passportJWTConfig } from "@modules/users/infra/http/middlewares/passportAuthentication"
import passport from "passport"

const app = express()

const allowedHeaders = [ "http://127.0.0.1:5500", "https://igorroc.github.io/pebl-web/"]

// const corsOpts = {
// 	origin: "http://127.0.0.1:5500",

// 	methods: ["GET", "POST"],

// 	allowedHeaders: ["Content-Type"],
	
// 	credentials:true,
// 	exposedHeaders: ["set-cookie"],
// 	preflightContinue:true
// }

//app.use(cors(corsOpts))

app.use(cors({
	origin: function (origin, callback) {
		// bypass the requests with no origin (like curl requests, mobile apps, etc )
		if (!origin) return callback(null, true);
	 
		if (allowedHeaders.indexOf(origin) === -1) {
		  var msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
		  return callback(new Error(msg), false);
		}
		return callback(null, true);
	},

	methods: ["GET", "POST"],

	allowedHeaders: ["Content-Type"],
	
	credentials:true,
	exposedHeaders: ["set-cookie"],
	preflightContinue:true
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json())
app.use("/files", express.static(uploadConfig.tmpFolder))
app.use(routes)

app.use(function (req, res, next) {
	if (allowedHeaders.indexOf(req.headers.origin) !== -1) {
		res.header('Access-Control-Allow-Origin', req.headers.origin);
	}
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
	res.setHeader("Access-Control-Allow-Headers", "Content-Type")
	res.setHeader("Access-Control-Allow-Credentials", "true")
	res.setHeader("Access-Control-Request-Method", "GET, POST, PUT, DELETE")
	res.setHeader("Access-Control-Request-Headers", "Content-Type")
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
passportJWTConfig(passport);
app.use(passport.initialize());

app.listen(3333,'127.0.0.1', () => {
	console.log("Server started on port 3333!")
})
