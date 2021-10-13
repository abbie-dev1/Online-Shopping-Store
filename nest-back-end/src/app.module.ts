import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './products/product/product.module';

@Module({
  imports: [ProductModule,MongooseModule.forRoot('mongodb+srv://Katlego1995:Katlego1995@cluster0.6dh7b.mongodb.net/Products?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
