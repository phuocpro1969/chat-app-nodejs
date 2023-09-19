import { NextFunction, Request, Response } from "express";
import { isNil } from "lodash";

/**
 *
 * HTTP express error handler
 *
 */
export const errorHandler = (error: any, request: Request, response: Response, next: NextFunction) => {
	if (isNil(error.message)) next();

	const errorInfo = {
		path: request.path,
		method: request.method,
		statusCode: error.status || 404,
		body: isNil(request.body) ? {} : JSON.stringify(request.body),
		error: error.message
	};

	// Error handling middleware functionality
	console.log(`REQUEST ERROR: ${JSON.stringify(errorInfo, null, 4)}`);
	const status = error.status || 400;
	// send back an easily understandable error message to the caller
	response.status(status).send(errorInfo);
};
