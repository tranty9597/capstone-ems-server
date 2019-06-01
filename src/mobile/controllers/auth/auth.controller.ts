import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    UseGuards,
    UseInterceptors,
    UnauthorizedException,
    InternalServerErrorException,
    HttpException
} from '@nestjs/common';

import { LoggingInterceptor, TransformInterceptor } from '../../../common/interceptors';
import { ParseIntPipe } from '../../../common/pipes';
// import { CatsService } from './cats.service';
import { CreateEndUser } from '../../dto';
import { EndUser } from '../../interfaces'

@Controller('auth')
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class AuthController {
    constructor() { }

    @Post()
    async create(@Body() createCatDto: CreateEndUser) {
        if (createCatDto.age > 10) {
            throw new HttpException({ ok: "conmemay" }, 400)
        } else {
            return
        }
    }
}