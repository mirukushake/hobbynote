import { Module } from '@nestjs/common';
import { PigmentsService } from './pigments.service';
import { PigmentsController } from './pigments.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PigmentsController],
  providers: [PigmentsService],
  imports: [PrismaModule],
})
export class PigmentsModule {}
