import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    UseGuards,
    UseInterceptors,
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
        return "Okkkkk"
    }
}