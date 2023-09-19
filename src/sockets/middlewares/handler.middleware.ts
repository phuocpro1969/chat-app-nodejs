/**
 *
 * custom handler to execute dynamic functions
 *
 * @typedef {{
 *  io: Server,
 *  socket: Socket,
 *  input: any,
 * }} HandlerPayloadType
 *
 * @param {Socket} socket socket event
 * @param {Function} functionHandler function need to execute handler
 * @param {HandlerPayloadType} payload payload for handler
 */
export const handler = (socket, functionHandler, payload) => {
	functionHandler(payload)
		.then((result) => {
			socket.emit("response", result);
		})
		.catch((err) => {
			console.error(err);
			const errorInfo = {
				statusCode: 400,
				message: err?.message || "function has error"
			};

			socket.emit("error", errorInfo);
		});
};
