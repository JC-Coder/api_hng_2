import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { Response } from "express";

interface IResponseMsg {
  statusCode: number;
  message: string[] | string;
  error: string;
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const message = exception.message;

    const responseMsg: IResponseMsg = exception.getResponse() as IResponseMsg;

    response.status(status).json(
      request.url.includes("providus/hook")
        ? exception.getResponse()
        : {
            success: false,
            data: exception.getResponse(),
            message: Array.isArray(responseMsg.message)
              ? responseMsg.message[0]
              : message,
          }
    );
  }
}
