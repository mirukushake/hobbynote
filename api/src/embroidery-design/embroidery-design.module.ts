import { Module } from '@nestjs/common';
import { EmbroideryDesignService } from './embroidery-design.service';
import { EmbroideryDesignController } from './embroidery-design.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [EmbroideryDesignController],
  providers: [EmbroideryDesignService],
  imports: [PrismaModule],
})
export class EmbroideryDesignModule {}
