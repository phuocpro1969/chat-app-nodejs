import { randomUUID } from "node:crypto";
import { Router } from "express";
import { addUser } from "~firebase";
export const routerUser: Router = Router();

routerUser.get("/", (_req, res) => {
	console.log("user api request");

	res.status(200).send("Welcome");
});

routerUser.post("/mock-user", async (_req, res) => {
	console.log("mock user api request");
	const mockUsers = [
		{
			uid: randomUUID(),
			username: "phuoc"
		},
		{
			uid: randomUUID(),
			username: "tin"
		}
	];

	await Promise.all(mockUsers.map((mockUser) => addUser(mockUser)));

	res.status(200).send("Mock successful");
});
