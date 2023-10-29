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
import { WatercolorModule } from './watercolor/watercolor.module';
import { PigmentsModule } from './pigments/pigments.module';

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
    WatercolorModule,
    PigmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
