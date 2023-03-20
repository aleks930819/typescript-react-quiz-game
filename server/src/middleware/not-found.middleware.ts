// src/middleware/not-found.middleware.ts

import { Request, Response, NextFunction } from 'express';

export const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = 'Resource not found';
  res.status(404).send(message);
  next();
};
