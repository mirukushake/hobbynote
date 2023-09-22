import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { FlossService } from './floss.service';
import { CreateFlossDto } from './dto/create-floss.dto';
import { UpdateFlossDto } from './dto/update-floss.dto';

@Controller('floss')
export class FlossController {
  constructor(private readonly flossService: FlossService) {}

  @Post()
  create(@Body() createFlossDto: CreateFlossDto) {
    return this.flossService.create(createFlossDto);
  }

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  findAll() {
    return this.flossService.findAll();
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('id') id: string) {
    return this.flossService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  update(@Param('id') id: string, @Body() updateFlossDto: UpdateFlossDto) {
    return this.flossService.update(+id, updateFlossDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flossService.remove(+id);
  }
}
