import { Module } from '@nestjs/common';
import { PencilsService } from './pencils.service';
import { PencilsController } from './pencils.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PencilsController],
  providers: [PencilsService],
  imports: [PrismaModule],
})
export class PencilsModule {}
