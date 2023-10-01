import { join } from 'path';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PencilsModule } from './pencils/pencils.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { FlossModule } from './floss/floss.module';
import { EmbroideryDesignModule } from './embroidery-design/embroidery-design.module';
import { MediaModule } from './media/media.module';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [
    PencilsModule,
    PrismaModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    FlossModule,
    EmbroideryDesignModule,
    MediaModule,
    StorageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
