import { Module } from '@nestjs/common';
import { EmbroideryDesignService } from './embroidery-design.service';
import { EmbroideryDesignController } from './embroidery-design.controller';

@Module({
  controllers: [EmbroideryDesignController],
  providers: [EmbroideryDesignService]
})
export class EmbroideryDesignModule {}
