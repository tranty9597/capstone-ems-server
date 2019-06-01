import { Module } from '@nestjs/common';
import { EUAuthController } from './controllers';
import { EUAuthService } from './services';


@Module({
  imports: [],
  controllers: [EUAuthController],
  providers: [EUAuthService],
})
export class AppModule { }
