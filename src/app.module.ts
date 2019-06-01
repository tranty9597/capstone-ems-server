import { Module } from '@nestjs/common';
import { MobileModule } from './mobile/mobile.module';
import { DashboardModule } from './dashboard/dashboard.module';


@Module({
  imports: [MobileModule, DashboardModule],
})
export class AppModule { }
