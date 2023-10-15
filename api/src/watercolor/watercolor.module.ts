import { Module } from '@nestjs/common';
import { WatercolorService } from './watercolor.service';
import { WatercolorController } from './watercolor.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [WatercolorController],
  providers: [WatercolorService],
  imports: [PrismaModule],
})
export class WatercolorModule {}
