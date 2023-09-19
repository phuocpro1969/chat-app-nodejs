import { Router } from "express";

export const routerUser: Router = Router();

routerUser.get("/", (_req, res) => {
	console.log("user api request");

	res.status(200).send("Welcome");
});
