import { Event } from "socket.io";

import { schemaSocketRequest } from "../validators";

/**
 *
 * Middleware function handler for validate request
 *
 */
export const validateRequestHandler = (socket: Event, next: (err?: Error) => void) => {
	const logRequestInfo = {
		action: socket[0],
		body: socket[1]
	};

	const { error } = schemaSocketRequest(logRequestInfo.action).validate(logRequestInfo);

	if (error) {
		console.log("SOCKET - Error: ", error);
		const customError = new Error("Request wrong!!");
		customError["input"] = logRequestInfo;
		customError["error"] = error;

		next(customError);
	}

	next();
};
