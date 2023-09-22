import { Module } from '@nestjs/common';
import { FlossService } from './floss.service';
import { FlossController } from './floss.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FlossController],
  providers: [FlossService],
  imports: [PrismaModule],
})
export class FlossModule {}
