import { HttpException } from '../common/http-exception';

import { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = error.statusCode || error.status || 500;
  const message = error.message || 'Something went wrong';
  res.status(status).send({
    status,
    message,
  });
};
