import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';

import { HttpExceptionFilter } from './http-exception.filter'

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {


        if (exception instanceof HttpException) {
            new HttpExceptionFilter().catch(exception, host)
        } else {
            const ctx = host.switchToHttp();
            const response = ctx.getResponse();
            const request = ctx.getRequest();
            let statusCode: HttpStatus = 500;
            let message: String = "Unknow exception";
            response.status(statusCode).json({
                statusCode,
                message,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
        }


    }
} 