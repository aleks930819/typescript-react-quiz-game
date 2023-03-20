// src/common/http-exception.ts

export class HttpException extends Error {
  statusCode?: number;
  status?: number;
  error: string | null;
  message: string;

  constructor(statusCode: number, message: string, error?: string) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.error = error || null;
  }
}
