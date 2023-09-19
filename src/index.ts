import express, { json, Request, Response } from "express";
import helmet from "helmet";

import dataSource from "~/dbs/datasource.db";

import { errorHandler, validateRequestHandler } from "./rest-apis/middlewares";
import { routerApi } from "./rest-apis/routers/router";
import { socketExecute } from "./sockets";

dataSource
	.initialize()
	.then(() => {
		console.log("Data Source has been initialized!");
	})
	.catch((err) => {
		console.error("Error during Data Source initialization:", err);
		process.exit(0);
	});

const app = express();
const server = socketExecute(app);

app.use(json());
app.use(helmet());

app.get("/", async (_req: Request, res: Response) => {
	res.status(200).send("PONG!");
});
app.use("/api/", routerApi);
app.use(validateRequestHandler);
app.use(errorHandler);

server.listen(4000);
