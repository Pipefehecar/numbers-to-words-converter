import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const PORT = process.env.PORT || 3001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = new DocumentBuilder()
     .setTitle('Number to Words API')
     .setDescription(
       'API para convertir números a palabras y listar conversiones recientes.',
     )
     .setVersion('1.0')
     .addTag('convert')
     .setBasePath('api/v1')
     .build();

   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('docs', app, document);
  app.setGlobalPrefix('/api/v1');
  await app.listen(PORT);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  console.log('\n🚀 Api started on http://localhost:' + PORT + '/api/v1\n');
}
bootstrap();
