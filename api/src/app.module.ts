import { join } from 'path';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PencilsModule } from './pencils/pencils.module';
import { CorsMiddleware } from './common/middleware/cors.middleware';
import { ServeStaticModule } from '@nestjs/serve-static';
import { FlossModule } from './floss/floss.module';
import { EmbroideryDesignModule } from './embroidery-design/embroidery-design.module';

@Module({
  imports: [
    PencilsModule,
    PrismaModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    FlossModule,
    EmbroideryDesignModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
