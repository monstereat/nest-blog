import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// import * as mongoose from 'mongoose'
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // mongoose.connect('mongodb://localhost/nest-blog-api', {
  //   useNewUrlParser: true,
  //   useFindAndModify: false,
  //   useCreateIndex: true
  // }
  // )


  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new ValidationPipe())

  const options = new DocumentBuilder()
    .setTitle('NestJs 博客PAI')
    .setDescription('我的第一个NestJs项目 ')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  
  await app.listen(5000);
}
bootstrap();
