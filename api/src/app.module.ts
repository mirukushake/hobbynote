import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PencilsModule } from './pencils/pencils.module';
import { CorsMiddleware } from './common/middleware/cors.middleware';

@Module({
  imports: [PencilsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
