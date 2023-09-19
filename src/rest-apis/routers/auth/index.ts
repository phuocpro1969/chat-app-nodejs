import { Router } from "express";

import { routerUser } from "./user.router";

export const routerAuth: Router = Router();

routerAuth.use("/users", routerUser);
