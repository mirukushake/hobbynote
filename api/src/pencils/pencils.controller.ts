import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PencilsService } from './pencils.service';
import { CreatePencilDto } from './dto/create-pencil.dto';
import { UpdatePencilDto } from './dto/update-pencil.dto';

@Controller('pencils')
export class PencilsController {
  constructor(private readonly PencilsService: PencilsService) {}

  @Post()
  create(@Body() createPencilDto: CreatePencilDto) {
    return this.PencilsService.create(createPencilDto);
  }

  @Get()
  findAll() {
    return this.PencilsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.PencilsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePencilDto: UpdatePencilDto) {
    return this.PencilsService.update(+id, updatePencilDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PencilsService.remove(+id);
  }
}
