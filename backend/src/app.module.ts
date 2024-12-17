import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';
import { NumberController } from './controllers/number.controller';
import { DatabaseModule } from './providers/postgres/postgres.provider';
import { SoapProvider } from './providers/soap/soap.provider';
import { NumberService } from './services/number.service';
import { ConversionRepository } from './repositories/conversion.repository';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
  ],
  controllers: [NumberController],
  providers: [NumberService, SoapProvider, ConversionRepository],
})
export class AppModule {}
