import { NextFunction, Request, Response } from "express";

/**
 * validate the path request exist
 */
export const validateRequestHandler = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  if (!req.route) return next(new Error("API path request not exist"));

  next();
};
