import { Router } from "express";

import { routerPublic } from "./public";
export const routerApi: Router = Router();

routerApi.use("/public", routerPublic);
routerApi.use("/auth", routerPublic);
