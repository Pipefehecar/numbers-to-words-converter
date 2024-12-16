import { Module } from '@nestjs/common';
import { NumberController } from './controllers/number.controller';
import { NumberService } from './services/number.service';
import { SoapProvider } from './providers/soap/soap.provider';

@Module({
  imports: [],
  controllers: [NumberController],
  providers: [NumberService, SoapProvider],
})
export class AppModule {}
