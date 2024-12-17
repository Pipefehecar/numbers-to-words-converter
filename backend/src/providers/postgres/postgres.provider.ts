import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Conversion } from '../../models/conversion.model';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get('postgres.host'),
        port: configService.get('postgres.port'),
        username: configService.get('postgres.username'),
        password: configService.get('postgres.password'),
        database: configService.get('postgres.database'),
        models: [Conversion],
        autoLoadModels: true,
        synchronize: true,
        // create tables if thy dont exist
        sync: {
          alter: true,
        },
        logging: false,
      }),
    }),
    SequelizeModule.forFeature([Conversion]),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
