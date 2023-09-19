import { Express } from "express";
import helmet from "helmet";
import { createServer } from "http";
import { Server } from "socket.io";

import { HANDLER_EVENTS } from "~constants";

import { LIST_FUNCTIONS } from "./functions";
import { handler, validateRequestHandler } from "./middlewares";
// import { instrument } from '@socket.io/admin-ui';

/**
 * Socket execute
 */
export const socketExecute = (app: Express) => {
	const server = createServer(app);
	const io = new Server(server, {});

	// instrument(io, {
	//     auth: {
	//         type: "basic",
	//         username: "admin",
	//         password: "$2b$10$heqvAkYMez.Va6Et2uXInOnkCT6/uQj1brkrbyG3LpopDklcq7ZOS" // "changeit" encrypted with bcrypt
	//     },
	//     namespaceName: "/admin",
	//     mode: "development",
	// });

	io.engine.use(helmet());

	io.sockets.on("connection", (socket) => {
		socket.use(validateRequestHandler);

		Object.values(HANDLER_EVENTS).map((key) => {
			socket.on(key, (payload) => {
				console.log(payload);
				handler(socket, LIST_FUNCTIONS[key], {
					socket,
					io,
					payload
				});
			});
		});

		socket.on("disconnect", function (data) {
			console.log("user disconnected!", data);
		});

		socket.on("reconnect", function (nr) {
			console.log("user reconnected: ", nr);
		});

		socket.on("connect_failed", function (err) {
			console.log("user connect failed:", err);
		});

		socket.on("error", (error) => {
			socket.emit("error", error);
		});
	});

	app.set("socketio", io);

	return server;
};
