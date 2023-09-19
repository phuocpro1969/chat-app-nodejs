import { Router } from "express";
import { routerUser } from "./user.router";
export const routerPublic: Router = Router();

routerPublic.use("/users", routerUser);
