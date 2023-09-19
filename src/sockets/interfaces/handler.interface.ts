import { Server } from "http";
import { Socket } from "socket.io";

export interface SocketHandlerPayload<T = any> {
	io: Server;
	socket: Socket;
	payload: T;
}
