import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryController } from './category/category.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import {Category} from "./category.entity";
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
          // @ts-ignore
          type: process.env.TYPEORM_CONNECTION,
          host: process.env.TYPEORM_HOST,
          port: parseInt(process.env.TYPEORM_PORT),
          username: process.env.TYPEORM_USERNAME,
          password: process.env.TYPEORM_PASSWORD,
          database: process.env.TYPEORM_DATABASE,
          entities: [Category],
      }),
      TypeOrmModule.forFeature([Category]),
      CategoryModule
  ],
  controllers: [AppController, CategoryController],
  providers: [AppService],
})
export class AppModule {

}
