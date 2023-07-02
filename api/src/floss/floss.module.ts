import { Module } from '@nestjs/common';
import { FlossService } from './floss.service';
import { FlossController } from './floss.controller';

@Module({
  controllers: [FlossController],
  providers: [FlossService]
})
export class FlossModule {}
