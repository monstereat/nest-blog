import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypegooseModule } from "nestjs-typegoose";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // TypegooseModule.forRoot("mongodb://localhost:27017/nest", {
    // useNewUrlParser: true,
    // })
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
    ,PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
