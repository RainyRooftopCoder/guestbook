import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(
        process.cwd(),
        'src',
        'env',
        `.env.${process.env.NODE_ENV}`,
      ),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
